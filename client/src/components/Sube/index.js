//Iconos
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//Hooks react
import React, {useState, useEffect} from 'react';
//Geolocalization de los puntos
import punto_sube from './puntos_sube.json';
//Estilo
import s from './index.module.css';
//Componente Mapa
import Maps from '../Maps/maps.js';

function Sube(){
    const [state, setState] = useState({
        latitude: '',
        longitude: '',
        lugar_mas_cercano: '',
        url: 'https://play-lh.googleusercontent.com/97b6LQgxJ78yKGxois8pN2KS21TV-0i8zlqUQ5Y8iUoVkMVWD6EPej1d2fCJZtltYQ'
    })
    var mas_cercano = 0;
    useEffect(() => {
        if(state.longitude === ''){
            navigator.geolocation.getCurrentPosition(onSucccess, onError);  
        }
        if(state.lugar_mas_cercano === ''){
            var best;
            var point = {lat: state.latitude, lng: state.longitude};
            var best_dif = 9999;
            var dif;
            for(let i = 1; i < punto_sube.length; ++i){
                dif = Math.abs(point.lat - punto_sube[i].lat) +
                        Math.abs(point.lng - punto_sube[i].lng);
                if(best_dif > dif){
                    best_dif = dif;
                    best = punto_sube[i];
                }
            }
            mas_cercano = best;
            console.log(best)
            console.log(mas_cercano)
            console.log(state.lugar_mas_cercano)
        }
        console.log(mas_cercano)
    })

    function onSucccess (position){
        console.log(position.coords.latitude, position.coords.longitude);
        setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      }
    
    function onError (){
        console.log("ocurrio un error o no hay permisos para ver la ubicación");
    }

    return(
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Bienvenido a los puntos de recarga SUBE </h1>
                    <p class="lead">Aquí puedes ver donde reciclar tu basura</p>
                    <p>- Al hacer click en un punto se generara la guía a la izquierda el camino de como llegar</p>
                    <p>- Puedes seleccionar entre ir caminando / automovil / bicicleta</p>
                    <p>- El punto A es tu posición actual</p>
                    <p>Volver atras</p>
                    <a href="http://localhost:3000/">
                    <button className={s.boton}>
                        <ChevronLeftIcon /> 
                    </button>
                    </a>
                </div>
            </div>
            {
                state.longitude === "" ? null : <Maps longitude={state.longitude} latitude={state.latitude} places={punto_sube} url={state.url} mas_cercano={mas_cercano}/> 
            }
        </div>
    )
}

export default Sube;