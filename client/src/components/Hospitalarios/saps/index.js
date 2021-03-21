import saps from './saps.json';
import s from './style.module.css';
import Maps from '../../Maps/maps.js';
import React, {useState, useEffect} from 'react';
import ExploreIcon from '@material-ui/icons/Explore';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

function Caps(){
    const [state, setState] = useState({
        latitude: '',
        longitude: '',
        mas_cercano: '',
        url: 'https://play-lh.googleusercontent.com/97b6LQgxJ78yKGxois8pN2KS21TV-0i8zlqUQ5Y8iUoVkMVWD6EPej1d2fCJZtltYQ'
    })
    useEffect(() => {
        if(state.longitude === ''){
            navigator.geolocation.getCurrentPosition(onSucccess, onError);  
        }
    })

    function onSucccess (position){
        setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
        async function Coordinates(){
            await masCercano()
        }
        Coordinates()
    }
    
    function onError (){
        console.log("ocurrio un error o no hay permisos para ver la ubicación");
    }
    async function masCercano (){
        var mas_cercano = 0;
            var best;
            var point = {lat: state.latitude, lng: state.longitude};
            var best_dif = 9999;
            var dif;
            for(let i = 1; i < saps.length; ++i){
                dif = Math.abs(point.lat - saps[i].lat) +
                        Math.abs(point.lng - saps[i].lng);
                if(best_dif > dif){
                    best_dif = dif;
                    best = saps[i];
                }
            }
            mas_cercano = best;
            console.log(mas_cercano)
            setState({
                ...state,
                mas_cercano:{ lng :mas_cercano.lng, lat: mas_cercano.lat}
            })
    }
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Atencion Medica - SAPS</h1>
                <p class="lead">Puedes visualizar los puntos</p>
                <p>Al hacer click en un punto se generara la guía a la izquierda el camino de como llegar</p>
                <p>Puedes seleccionar entre ir caminando / automovil / bicicleta</p>
                <p>El punto A es tu posición actual</p>
                <p>Buscar el más cercano</p>
                <button className={s.boton}>
                    <ExploreIcon></ExploreIcon>
                </button>
                <p>Volver atras</p>
                <a href="http://localhost:3000/atencion">
                    <button className={s.boton}>
                        <ChevronLeftIcon></ChevronLeftIcon>
                    </button>
                </a>
            </div>
            </div>
            {
                state.longitude === "" ? null : <Maps longitude={state.longitude} latitude={state.latitude} places={saps} url={state.url} mas_cercano={state.mas_cercano}/> 
            }
        </div>
    )
}

export default Caps;