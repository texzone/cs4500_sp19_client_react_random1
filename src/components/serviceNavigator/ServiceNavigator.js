import React from 'react'
import ServiceCategoryList from './ServiceCategoryList'
import ServiceCategorySectionList from './ServiceCategorySectionList'
import ServiceCategoryService from '../../services/ServiceCategoryService'
import serviceCategories from '../../mock/data/service_categories.mock.json'
import Register from "../register/Register";
import Login from "../login/login";
import {BrowserRouter as Route, Link} from 'react-router-dom'

const ServiceNavigator = () =>
    <div>
        <div className="row">
            <div className="col-11 text-right">
                <Link to="/login">Login</Link>
                <Route
                    path="/register"
                    exact
                    component={Register}/>
            </div>
            <div className="col-1">
                <Link to="/register">Register</Link>
                <Route
                    path="/login"
                    exact
                    component={Login}/>
            </div>
        </div>
        <br/>
        <br/>
        <div className="row">
            <div className="col-3">
                <ServiceCategoryList
                    serviceCategories={serviceCategories}/>
            </div>
            <div className="col-9">
                <ServiceCategorySectionList
                    serviceCategories={serviceCategories}/>
            </div>
        </div>
    </div>

export default ServiceNavigator
