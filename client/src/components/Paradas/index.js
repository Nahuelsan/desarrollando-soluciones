//Iconos
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExploreIcon from '@material-ui/icons/Explore';
//Hoosk react
import React, { useState } from 'react';
//Componente Mapa
import Maps from '../Maps/maps_colectivos.js';
import paradas from './paradas-colectivos.json';
function Paradas(){
    const [state, setState] = useState({
        latitude: '',
        longitude: '',
        paradas: ''
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
                    <h1 class="display-4">Bienvenido a seccion transporte</h1>
                    <p class="lead">Aquí puedes ver los recorridos</p>
                    <p>- El punto A es tu posición actual</p>
                    <p>Volver atras</p>
                    <a href="http://localhost:3000/">
                    <button >
                        <ChevronLeftIcon /> 
                    </button>
                    </a>
                </div>
            </div>
 
            {
                state.longitude === "" ? null : <Maps longitude={state.longitude} latitude={state.latitude} places={paradas} url={state.url}/> 
            }
        </div>
    )
}

export default Paradas;