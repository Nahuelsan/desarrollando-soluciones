//Iconos
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//Geolocalization de los puntos
import punto_sube from './puntos_sube.json';
//Hooks react
import React, {useState} from 'react';
//Estilo
import s from './index.module.css';
//Componente Mapa
import Maps from '../Maps/maps.js';

function Sube(){
    const [state, setState] = useState({
        latitude: '',
        longitude: '',
        punto_sube,
        url: 'https://play-lh.googleusercontent.com/97b6LQgxJ78yKGxois8pN2KS21TV-0i8zlqUQ5Y8iUoVkMVWD6EPej1d2fCJZtltYQ'
    })
    navigator.geolocation.getCurrentPosition(onSucccess, onError);

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
                state.longitude === "" ? null : <Maps longitude={state.longitude} latitude={state.latitude} places={punto_sube} url={state.url}/> 
            }
        </div>
    )
}

export default Sube;