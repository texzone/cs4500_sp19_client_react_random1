import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Register from './components/register/Register'
import Admin from './components/Admin'
import HomeContainer from './components/containers/HomeContainer'
import ServiceNavigator from './components/serviceNavigator/ServiceNavigator'
import ServiceProviderNavigator from './components/ServiceProviderNavigator'
import BusinessDetails from './components/BusinessDetails'

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
                        <Link to="/admin">Admin</Link>
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
                            path="/providers"
                            exact
                            component={ServiceProviderNavigator}/>
                        <Route
                            path="/businessDetails/:id"
                            exact
                            component={BusinessDetails}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
