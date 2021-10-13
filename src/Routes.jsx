import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import FullMap from "./Pages/Map/MapContainer";
import Project from './Pages/Project/Project';
import Skills from "./Pages/Skills/Skills";

const Routes = () =>(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/sobre" component={About}/>
        <Route exact path="/mapa" component={FullMap}/>
        <Route exact path="/projeto" component={Project}/>
        <Route exact path="/habilidades" component={Skills}/>
        <Redirect from='*' to='/'/>
    </Switch>
)
export default Routes