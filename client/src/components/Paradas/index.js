//Hoosk react
import React, { useState, useEffect } from 'react';
//Componente Mapa
import Maps from '../Maps/maps_colectivos.js';
//Iconos
import ExploreIcon from '@material-ui/icons/Explore';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//Barrios, Paradas
import paradas from './paradas-colectivos.json';
import barrios from './barrios.json';
//Estilo
import s from './style.module.css';
//Material UI

function Paradas(){
    const [state, setState] = useState({
        latitude: '',
        longitude: '',
        paradas: '',
        barrio_a_ir: ''
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
    function setearValor(){
        var select = document.getElementById("barrio_ir");
        console.log(select.value);
        setState({
            ...state,
            barrio_a_ir: document.getElementById("barrio_ir")
        })
    }
    return(
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Bienvenido a la seccion transporte</h1>
                    <p class="lead">Aquí puedes ver los recorridos</p>
                    <p>- El punto A es tu posición actual</p>
                    <p>Buscar el más cercano</p>
                <button className={s.boton}>
                    <ExploreIcon></ExploreIcon>
                </button>
                <p>Volver atras</p>
                <a href="http://localhost:3000">
                    <button className={s.boton}>
                        <ChevronLeftIcon></ChevronLeftIcon>
                    </button>
                </a>
                <div className={s.select}>
                <form action="barrio" method="post">
                    <select id="barrio_ir" onChange={setearValor}>
                        <option value="default" selected>Seleccione un barrio</option>
                        {
                            barrios.map(barrio =>
                            <option value={barrio}>{barrio.nombre_barrio}</option>
                            )
                        }
                    </select>
                </form>
                </div>
                </div>

            </div>
 
            {
                state.longitude === "" ? null : <Maps longitude={state.longitude} latitude={state.latitude} places={paradas.slice(0, 100)} url={state.url}/> 
            }
        </div>
    )
}

export default Paradas;