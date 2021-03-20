import React from 'react';
import Sube from './components/Sube';
import Home from './components/Home';
import Paradas from './components/Paradas';
import ZonaVerde from './components/ZonaVerde';
import { Route, Switch } from 'react-router-dom';
import Medicina from './components/Hospitalarios';
import Caps from './components/Hospitalarios/caps';
import Saps from './components/Hospitalarios/saps';
import Privados from './components/Hospitalarios/privados';
import Publicos from './components/Hospitalarios/publicos';
import Demo from './components/Paradas/demo-autocomplete.js';

function App(){
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sube" component={Sube}/>
                <Route exact path="/paradas" component={Paradas}/>
                <Route exact path="/atencion" component={Medicina}/>
                <Route exact path="/paradas/demo" component={Demo}/>
                <Route exact path="/atencion/caps" component={Caps}/>
                <Route exact path="/atencion/saps" component={Saps}/>
                <Route exact path="/zona_verde" component={ZonaVerde}/>
                <Route exact path="/atencion/publicos" component={Publicos}/>
                <Route exact path="/atencion/privados" component={Privados}/>
            </Switch>
        </div>
    )
}

export default App;
