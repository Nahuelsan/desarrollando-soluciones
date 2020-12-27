import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ZonaVerde from './components/ZonaVerde';
import Medicina from './components/Hospitalarios';
import Sube from './components/Sube';
import Paradas from './components/Paradas';
import Home from './components/Home';
import Publicos from './components/Hospitalarios/publicos';
import Privados from './components/Hospitalarios/privados';
import Caps from './components/Hospitalarios/caps';
import Saps from './components/Hospitalarios/saps';

function App(){
    return(
        <div>
            <Switch>
                <Route exact path="/zona_verde" component={ZonaVerde}/>
                <Route exact path="/paradas" component={Paradas}/>
                <Route exact path="/sube" component={Sube}/>
                <Route exact path="/atencion" component={Medicina}/>
                <Route exact path="/atencion/caps" component={Caps}/>
                <Route exact path="/atencion/saps" component={Saps}/>
                <Route exact path="/atencion/publicos" component={Publicos}/>
                <Route exact path="/atencion/privados" component={Privados}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    )
}

export default App;
