import React, {useState} from 'react';
import Maps from '../Maps/maps.js';
import punto_sube from './puntos_sube.json';
function Sube({clickSubmit, latitude, longitude}){
    const [state] = useState({
        latitude: latitude ,
        longitude: longitude,
        punto_sube,
        url: 'https://play-lh.googleusercontent.com/97b6LQgxJ78yKGxois8pN2KS21TV-0i8zlqUQ5Y8iUoVkMVWD6EPej1d2fCJZtltYQ'
    })
    const backToHome = e => {
        clickSubmit(e)
    }
            
    return(
        <div>
            <div >
            <h1>¿Donde recargo SUBE?</h1>
            <p>Puedes buscar el lugar mas cercano segun tu ubicacion</p>
            </div>
            <button onClick={() => alert('Buscando')}>BUSCAR SEGUN UBICACION</button>
            <Maps longitude={state.longitude} latitude={state.latitude} places={state.punto_sube.slice(0,100)} url={state.url}/> 
            <button onClick={backToHome} name='sube'>Volver al INICIO</button>
        </div>
    )
}

export default Sube;