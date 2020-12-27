import './App.css';
import React from 'react'; 
import s from './estilos.module.css'; 
import EcoIcon from '@material-ui/icons/Eco';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';


class App extends React.Component{
    render() {
      return (
        <div className="App">
            <div>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Bienvenido </h1>
                <p class="lead">Aquí puedes visualizar los siguientes puntos en la ciudad de Corrientes</p>
                <p>Puntos verdes</p>
                <p>Servicios medicos</p>
                <p>Puntos de recarga SUBE</p>
                <p>Consultar paradas de colectivos</p>
            </div>
            </div>
            <a href="http://localhost:3000/zona_verde">
            <button name='zona_verde' className={s.zonaVerde}>
              
              <EcoIcon />
            </button>
            </a>

            <a href="http://localhost:3000/sube">
            <button className={s.sube}>
              SUBE
            </button>
            </a>
            <div>
            <a href="http://localhost:3000/atencion">
            <button className={s.hospitales}>
              <LocalHospitalRoundedIcon color="secondary" ></LocalHospitalRoundedIcon>
            </button>
            </a>
            <a href="http://localhost:3000/paradas">
            <button className={s.paradas}>
              <DirectionsBusIcon></DirectionsBusIcon>
            </button>
            </a>
              </div>
            </div>
        </div>
      );
    }
}


export default App;
