import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

function Hospitalarios(){
        return(
            <div>
                <h1>Bienvenido a las zonas de hospitales de Corrientes</h1>
                <p>Puedes ver los lugares para acceder a asistencia medica </p>
                <p>Seleccionar:</p>
                <div>
                    <a href="http://localhost:3000/atencion/publicos">
                        <button >Hospitales Publicos</button>
                    </a>
                </div>
                
                <div>
                    <a href="http://localhost:3000/atencion/privados">
                        <button >Hospitales Privados</button>
                    </a>
    
                </div>
            
                <div>
                    <a href="http://localhost:3000/atencion/saps">
                        <button >SAPS</button>
                    </a>
    
                </div>
                
                <div>
                    <a href="http://localhost:3000/atencion/caps">
                        <button >CAPS</button>
                    </a>
                </div>
                <a href="http://localhost:3000/">
                    <button>
                        <ChevronLeftIcon></ChevronLeftIcon>
                    </button>
                </a>
            </div>
    );
}



export default Hospitalarios;