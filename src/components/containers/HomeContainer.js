import React from 'react'
import HomeSearchBar from '../views/HomeSearchBar'
import ServiceCategoryPills from '../views/ServiceCategoryPills'
import ServiceProviderService from '../../services/ServiceProviderService'
import { Redirect } from 'react-router-dom';
//import ServiceTabNavigator from './ServiceTabNavigator/ServiceTabNavigator'
//import serviceCategories from '../data/service-categories.mock.json'
class HomeContainer extends React.Component {
  constructor(props) {
      super(props)
      this.serviceProviderService = ServiceProviderService.getInstance()
      this.state = {
        resultProviders: [],
        toProviders: false
      }

    this.searchProviders = this.searchProviders.bind(this)
    this.clearInputs = this.clearInputs.bind(this)

  }

  componentDidMount() {}

  searchProviders() {
    var providerInput = document.getElementById('provider_input').value;
    var zipCodeInput = document.getElementById('zip_code_input').value;
    this.serviceProviderService.
    filterServiceProviders({provider: providerInput, zipCode: zipCodeInput})
        .then(results =>
          this.setState({
            resultProviders: results,
            toProviders: true
          })
        )
  }

  clearInputs() {
    var providerInput = document.getElementById('provider_input');
    var zipCodeInput = document.getElementById('zip_code_input');
    providerInput.value = ""
    zipCodeInput.value = ""
  }

  render() {
      if(this.state.toProviders === true) {
        if(this.state.resultProviders.length > 0) {
          return <Redirect to={{
              pathname: '/services/-1',
              state: { serviceProviders: this.state.resultProviders }
          }}/>
        } else {
          alert('No results found. Please try again.')
          this.clearInputs()
          this.setState({
            toProviders: false
          })
        }
      }
      return (
        <div>
          <div className="row">
              <div className="col-8">
                  <h1>
                      Find professionals near you.
                  </h1>
                  <HomeSearchBar searchFn={this.searchProviders}/>
              </div>
              <div className="col-3 text-right">
                  <a href="#">Sign up</a>
              </div>
              <div className="col-1">
                  <a href="#">Log in</a>
              </div>
          </div>

          <br/>
            <ServiceCategoryPills/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
      </div>
      )

  }
}


export default HomeContainer
