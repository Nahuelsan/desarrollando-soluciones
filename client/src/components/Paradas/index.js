import React, { useState } from 'react';
import Maps from '../Maps/maps.js';

function Paradas({clickSubmit, latitude, longitude}){
    const [state] = useState({
        latitude: latitude,
        longitude: longitude
    })
    const backToHome = e => {
        clickSubmit(e)
    }
    return(
        <div>
            <h1>Bienvenido a los recorridos de los colectivos</h1>
            <p>Puede ver los recorridos de las lineas que prefieras</p>
            <p>¿A dónde quieres ir?</p>
            <input type="text-area"></input>            
            <Maps longitude={state.longitude} latitude={state.latitude}/> 
            <button onClick={backToHome} name='paradas'>Volver al INICIO</button>
        </div>
    )
}

export default Paradas;