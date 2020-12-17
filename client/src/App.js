import './App.css';
import React, { useState } from 'react'; 
import s from './estilos.module.css'; 
import ZonaVerde from './components/ZonaVerde/index.js';
import Hospitales from './components/Hospitalarios/index.js';
import Sube from './components/Sube/index.js';
import Paradas from './components/Paradas/index.js';

function App() {
  const [state, setState] = useState({
    zona_verde: false,
    sube: false,
    hospitalario: false,
    paradas: false,
    home: true,
    latitude: '',
    longitude: ''
  }) 
  const geolocalitation = () => {
    navigator.geolocation.getCurrentPosition(onSucccess, onError, config );
    /* se ejecuta si los permisos son concedidos y se encuentra una ubicación*/
    function onSucccess(position) {
      console.log(position.coords.latitude, position.coords.longitude);
      setState({
        ...state,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    }
 
    /*se ejecuta si el permiso fue denegado o no se puede encontrar una ubicación*/
    function onError() {
      console.log("ocurrio un error o no hay permisos para ver la ubicación");
    }

    var config = {
      enableHighAccuracy: true, 
      maximumAge        : 30000, 
      timeout           : 27000
    };
  }

  const clickSubmit = e => {
    console.log(e.target)
      setState({
        ...state,
        [e.target.name]: (state[e.target.name] === false) ? true : false,
        home: (state.home === false) ? true : false,
      })

    }

    
  return (
    <div className="App">
        {
          state.home === true &&
        <div>
        <h1>Corrientes</h1>
        <button onClick={clickSubmit} name='zona_verde' className={s.zonaVerde}>ZONAS VERDES</button>
        <button onClick={clickSubmit} name='sube' className={s.sube}>DONDE RECARGO SUBE</button>
        <button onClick={clickSubmit} name='hospitalario' className={s.hospitales}>ATENCION MEDICA</button>
        <button onClick={clickSubmit} name='paradas' className={s.paradas}>PARADAS DE COLECTIVO</button>
        <button onClick={geolocalitation}> Activar geolocalizacion</button>
        </div>
        }
        {
          state.hospitalario === true &&
          <Hospitales longitude={state.longitude} latitude={state.latitude} clickSubmit={clickSubmit}/>
        }
        {
          state.sube === true &&
          <Sube longitude={state.longitude} latitude={state.latitude} clickSubmit={clickSubmit}/>
        }
        {
          state.zona_verde === true &&
          <ZonaVerde longitude={state.longitude} latitude={state.latitude} clickSubmit={clickSubmit}/>
        }
        {
          state.paradas === true &&
          <Paradas longitude={state.longitude} latitude={state.latitude} clickSubmit={clickSubmit}/>
        }

    </div>
  );
}

export default App;
