import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Confpage from '../Confpage/index';
import Prespage from '../Prespage/index'

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <NavLink exact to="/"> Config Page</NavLink>
            <NavLink to="/Prespage"> Calendar Page </NavLink>
          </header>

          <Switch>
            <Route exact path="/" component={Confpage} />
            <Route path="/Prespage/:idCalendar" component={Prespage} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default Routing;