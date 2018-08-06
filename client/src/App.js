import React, { Component } from 'react';
// eslint-disable-next-line
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Cities from './components/Cities';
import Restaurants from './components/Restaurants';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/cities" component={Cities}/>
        <Route path="/cities/:cityId/restaurant/" component={Restaurants}/>

      </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
