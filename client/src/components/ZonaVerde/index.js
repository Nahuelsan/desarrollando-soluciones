import React, {useState, useEffect} from 'react';
import Maps from '../Maps/maps.js';

import Puntos from './ubicaciones_puntos_verdes.json';
import s from './style.module.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


function ZonaVerde(){
    const [state, setState] = useState({
        Puntos,
        latitude: '',
        longitude: '',
        url: "data:image/png;base64,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"
    })
    useEffect(() => {
        if(state.longitude === ''){
            navigator.geolocation.getCurrentPosition(onSucccess, onError);  
        }
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
                    <h1 class="display-4">Bienvenido a los puntos verdes </h1>
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
                state.longitude === "" ? null : <Maps longitude={state.longitude} latitude={state.latitude} places={Puntos} url={state.url}/> 
            }
            

        </div>
    )
}

export default ZonaVerde;