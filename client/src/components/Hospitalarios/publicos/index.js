import React,{useState} from 'react';
import publicos from './hospitales.json';
import Maps from '../../Maps/maps.js';
import ExploreIcon from '@material-ui/icons/Explore';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

function Caps(){
    const [state, setState] = useState({
        latitude: '',
        longitude: '',
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

    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Atencion Medica - HOSPITALES PUBLICOS</h1>
                <p class="lead">Puedes visualizar los puntos</p>
                <p>Al hacer click en un punto se generara la guía a la izquierda el camino de como llegar</p>
                <p>Puedes seleccionar entre ir caminando / automovil / bicicleta</p>
                <p>El punto A es tu posición actual</p>
            </div>
            </div>
            <button onClick={() => alert('Buscando')} >
                <ExploreIcon></ExploreIcon>
            </button>
            {
                state.longitude === "" ? null : <Maps longitude={state.longitude} latitude={state.latitude} places={publicos} url={state.url}/> 
            }
            <a href="http://localhost:3000/atencion">
                <button>
                    <ChevronLeftIcon></ChevronLeftIcon>
                </button>
            </a>
            
        </div>
    )
}

export default Caps;