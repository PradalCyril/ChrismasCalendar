import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Confpage from './components/Confpage/index';
import Prespage from './components/Prespage/index'




class App extends Component {
  render() {
    return (
           <BrowserRouter>
        <div className="page-container">
          <Switch>
            <Route exact path="/" component={Confpage} />
            <Route path="/Prespage/:idCalendar" component={Prespage} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

