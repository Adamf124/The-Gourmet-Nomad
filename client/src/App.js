import React, { Component } from 'react';
// import './App.css';
// eslint-disable-next-line
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Cities from './components/Cities';
import Restaurants from './components/Restaurants';
import SpecificCity from './components/SpecificCity';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/cities" component={Cities}/>
        <Route exact path="/cities/:cityId" component={SpecificCity}/>
        <Route exact path="/cities/:cityId/restaurant/" component={Restaurants}/>

      </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
