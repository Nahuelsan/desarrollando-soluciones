import React from 'react';
import Maps from '../Maps/maps.js';
import hospitales_publicos from './hospitales.json';
import hospitales_privados from './hospitalesprivados.json';
import CAPS from './CAPS.json';
import SAPS from './saps.json';

class Hospitalarios extends React.Component {
    state = {
        latitude: this.props.latitude,
        longitude: this.props.longitude,
        places: [],
        hospitales_privados,
        hospitales_publicos,
        CAPS,
        SAPS,
    }
    
    viewTo = e => {
        this.setState({
            places: this.state[e.target.name]
        },() =>{ 
            this.render();
        });
    }
    backToHome = e => {
        this.props.clickSubmit(e)
    }
    render(){
        return(
            <div>
                <h1>Bienvenido a las zonas de hospitales de Corrientes</h1>
                <p>Puedes ver los lugares para acceder a asistencia medica </p>
                <p>Seleccionar:</p>
                <div>
                    <button variant="contained" color="primary"  name="hospitales_publicos" onClick={this.viewTo}>Hospitales Publicos</button>
                </div>
                
                <div>
                    <button variant="contained" color="secondary" name="hospitales_privados" onClick={this.viewTo}>Hospitales Privados</button>
    
                </div>
                
                <div>
                    <button variant="contained" color="primary" name="SAPS" onClick={this.viewTo}>SAPS</button>
    
                </div>
                
                <div>
                    <button variant="contained" color="secondary" name="CAPS" onClick={this.viewTo}>CAPS</button>
    
                </div>
                <h3>Busca el lugar mas cercano segun tu ubicacion</h3>
                <Maps longitude={this.state.longitude} latitude={this.state.latitude} places={this.state.places}/> 
                <button onClick={this.backToHome} name='hospitalario'>Volver al INICIO</button>
    
            </div>
    )}
}



export default Hospitalarios;