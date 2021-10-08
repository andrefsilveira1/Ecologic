import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import {Mapa} from "./Pages/Map/Map"
import Project from './Pages/Project/Project';
import Skills from "./Pages/Skills/Skills"

export default props =>(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/sobre" component={About}/>
        <Route exact path="/mapa" component={Mapa}/>
        <Route exact path="/projeto" component={Project}/>
        <Route exact path="/habilidades" component={Skills}/>
        <Redirect from='*' to='/'/>
    </Switch>
)