import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import s from './index.module.css';
function Hospitalarios(){
        return(
            <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Bienvenido a los servicios hospitalrios </h1>
                    <p class="lead">Aquí puedes ver los siguientes puntos</p>
                    <p>- Hospitales públicos y privados</p>
                    <p>- Centros de Atención Primaria o (CAPs)</p>
                    <p>- Salas de Atención Primaria de la Salud o (SAPS)</p>
                    <p>Volver atras</p>
                    <a href="http://localhost:3000/">
                    <button className={s.boton}>
                        <ChevronLeftIcon /> 
                    </button>
                    </a>
                </div>

            </div>
            <div className={s.contenedor}>
                <div>
                    <a href="http://localhost:3000/atencion/publicos">
                        <button className={s.botones}>Hospitales Publicos</button>
                    </a>
                </div>
                
                <div>
                    <a href="http://localhost:3000/atencion/privados">
                        <button className={s.botones}>Hospitales Privados</button>
                    </a>
    
                </div>
            
                <div>
                    <a href="http://localhost:3000/atencion/saps">
                        <button className={s.botones}>SAPS</button>
                    </a>
    
                </div>
                
                <div>
                    <a href="http://localhost:3000/atencion/caps">
                        <button className={s.botones}>CAPS</button>
                    </a>
                </div>
            </div>
            </div>
    );
}



export default Hospitalarios;