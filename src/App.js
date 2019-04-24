import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Register from './components/register/Register'
import Admin from './components/Admin'
import HomeContainer from './components/containers/HomeContainer'
import ServiceNavigator from './components/serviceNavigator/ServiceNavigator'
import BusinessDetails from './components/BusinessDetails'
import Login from './components/login/login'
import ServiceProviderSearch from "./components/serviceProviderSearch/ServiceProviderSearch"
import Profile from "./components/profile/Profile";

class App extends Component {
  render() {
    return (
        <div className="container-fluid">
          <h1>Random1-ServicesRus</h1>
          <Router>
            <div>
              <Link to="/register">Register</Link> |
              <Link to="/home">Home</Link> |
              <Link to="/services">Services</Link> |
              <Link to="/admin">Admin</Link> |
              <Link to="/login">Login</Link> |
              <Link to="/profile">Profile</Link>
              <br/>
              <br/>
              <br/>
              <Route
                  path="/register"
                  exact
                  component={Register}/>
              <Route
                  path="/home"
                  exact
                  component={HomeContainer}/>
              <Route
                  path="/services"
                  exact
                  component={ServiceNavigator}/>
              <Route
                  path="/admin"
                  exact
                  component={Admin}/>
              <Route
                  path="/login"
                  exact
                  component={Login}/>
              <Route
                  path="/businessDetails/:id"
                  exact
                  component={BusinessDetails}/>
              <Route
                  path="/services/:id"
                  exact
                  component={ServiceProviderSearch}/>
              <Route
                  path="/profile"
                  exact
                  component={Profile}/>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
