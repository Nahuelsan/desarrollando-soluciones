import './App.css';
import React, { useState } from 'react'; 
import s from './estilos.module.css'; 
import ZonaVerde from './components/ZonaVerde/index.js';
import Hospitales from './components/Hospitalarios/index.js';
import Sube from './components/Sube/index.js';
import Paradas from './components/Paradas/index.js';

class App extends React.Component{
  componentDidMount(){
    this.geolocalitation()
  }
  state = {
    zona_verde: false,
    sube: false,
    hospitalario: false,
    paradas: false,
    home: true,
    latitude: '',
    longitude: ''
  }
  geolocalitation = () => {
    navigator.geolocation.getCurrentPosition(this.onSucccess, this.onError);
    /* se ejecuta si los permisos son concedidos y se encuentra una ubicación*/
  }
  onSucccess = (position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }
  onError = () => {
    console.log("ocurrio un error o no hay permisos para ver la ubicación");
  }
  clickSubmit = e => {
    console.log(e.target)
      this.setState({
        [e.target.name]: (this.state[e.target.name] === false) ? true : false,
        home: (this.state.home === false) ? true : false,
      })

    }

    render() {
      return (
        <div className="App">
            {
              this.state.home === true &&
            <div>
            <h1>Corrientes</h1>
            <button onClick={this.clickSubmit} name='zona_verde' className={s.zonaVerde}>ZONAS VERDES</button>
            <button onClick={this.clickSubmit} name='sube' className={s.sube}>DONDE RECARGO SUBE</button>
            <button onClick={this.clickSubmit} name='hospitalario' className={s.hospitales}>ATENCION MEDICA</button>
            <button onClick={this.clickSubmit} name='paradas' className={s.paradas}>PARADAS DE COLECTIVO</button>
            </div>
            }
            {
              this.state.hospitalario === true &&
              <Hospitales longitude={this.state.longitude} latitude={this.state.latitude} clickSubmit={this.clickSubmit}/>
            }
            {
              this.state.sube === true &&
              <Sube longitude={this.state.longitude} latitude={this.state.latitude} clickSubmit={this.clickSubmit}/>
            }
            {
              this.state.zona_verde === true &&
              <ZonaVerde longitude={this.state.longitude} latitude={this.state.latitude} clickSubmit={this.clickSubmit}/>
            }
            {
              this.state.paradas === true &&
              <Paradas longitude={this.state.longitude} latitude={this.state.latitude} clickSubmit={this.clickSubmit}/>
            }
    
        </div>
      );
    }
}


export default App;
