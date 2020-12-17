import React, {useState} from 'react';
import Maps from '../Maps/maps.js';
import hospitales_publicos from './hospitales.json';
import hospitales_privados from './hospitalesprivados.json';
import CAPS from './CAPS.json';
import SAPS from './saps.json';
import {Button} from '@material-ui/core';
function Hospitalarios({clickSubmit, latitude, longitude}){
    const [state, setState] = useState({
        latitude: latitude,
        longitude: longitude,
        places: [],
        hospitales_privados,
        hospitales_publicos,
        CAPS,
        SAPS,
        url: "https://lh3.googleusercontent.com/proxy/IZzQnMW3Q1ubg3Nv4uTzmDh7l6U5LhaTsfs06weK7JLcbp_71mYRiwp1SxTRpFdwqsdUoWH6p5c4KjUAUUywHv73Q_Iogf3n0efD_hzFRASFjr7wYfcWwXo"
    })
    const backToHome = e => {
        clickSubmit(e)
    }
    const viewTo = e => {
        console.log(e.target.name)
            setState({
                ...state,
                places: state[e.target.name]
            })
       
    }
    return(
        <div>
            <h1>Bienvenido a las zonas de hospitales de Corrientes</h1>
            <p>Puedes ver los lugares para acceder a asistencia medica </p>
            <p>Seleccionar:</p>
            <div>
                <button variant="contained" color="primary"  name="hospitales_publicos" onClick={viewTo}>Hospitales Publicos</button>
            </div>
            
            <div>
                <button variant="contained" color="secondary" name="hospitales_privados" onClick={viewTo}>Hospitales Privados</button>

            </div>
            
            <div>
                <button variant="contained" color="primary" name="SAPS" onClick={viewTo}>SAPS</button>

            </div>
            
            <div>
                <button variant="contained" color="secondary" name="CAPS" onClick={viewTo}>CAPS</button>

            </div>
            <h3>Busca el lugar mas cercano segun tu ubicacion</h3>
            <button onClick={() => alert('Buscando')}>BUSCAR</button>
            <Maps longitude={state.longitude} latitude={state.latitude} places={state.places} url={state.url}/> 
            <button onClick={backToHome} name='hospitalario'>Volver al INICIO</button>

        </div>
    )
}

export default Hospitalarios;