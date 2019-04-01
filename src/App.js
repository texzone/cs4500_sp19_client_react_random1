import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import HomeContainer from './components/containers/HomeContainer'
import ServiceProviderNavigator from './components/ServiceProviderNavigator'

class App extends Component {
  render() {
    return (
        <div className="container-fluid">
          <h1>Random1-ServicesRus</h1>
          <Router>
            <div>
              <Link to="/home">Home</Link> |
              <Link to="/admin">Admin</Link>
              <br/>
              <br/>
              <br/>
              <Route
                  path="/home"
                  exact
                  component={HomeContainer}/>
              <Route
                  path="/admin"
                  exact
                  component={Admin}/>
              <Route
                  path="/providers"
                  exact
                  component={ServiceProviderNavigator}/>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
