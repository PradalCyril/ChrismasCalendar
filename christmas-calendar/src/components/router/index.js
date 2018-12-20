import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Accueil';

class Routing extends Component {
  render() {
    return (
      <div>

      </div>
      <BrowserRouter>
        <div>
          <header>
            <NavLink exact to="/"> Accueil </NavLink>
            <NavLink to="/AgentHomePage"> Agent Home Page </NavLink>
          </header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/AgentHomePage" component={AgentHomePage} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default Routing;