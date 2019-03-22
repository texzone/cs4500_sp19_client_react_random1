import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import ServiceService from './services/ServiceService'

class App extends Component {
  constructor(props) {
      super(props)
      this.servicesService = ServiceService.getInstance()
  }
  render() {
    return (
        <div className="container-fluid">
          <h1>Random1-ServicesRus</h1>
          <Router>
            <div>
              <Link to="/admin">Admin</Link>
              <Route
                  path="/admin"
                  exact
                  component={Admin}/>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
