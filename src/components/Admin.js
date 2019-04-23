import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ServicesContainer from './containers/ServicesContainer'
import ServiceService from '../services/ServiceService'
import FAQs from './FAQs'
import FAQContainer from './containers/FAQContainer'
import FAQDetails from './FAQDetails'
import FAQAnswers from './FAQAnswers'
import FAQAnswerDetails from './FAQAnswerDetails'
import Users from './Users'
import ServiceAnswerDetails from "./ServiceAnswerDetails";
import ServiceAnswer from "./ServiceAnswer";
import ServicesProviderSearch from "./serviceProviderSearch/ServiceProviderSearch";
const servicesService = ServiceService.getInstance()

const Admin = () =>
    <div>
        <h2>Admin</h2>
        <Router>
            <div className="row">
                <div className="col-3">
                    <Link to="/admin/users">Users</Link>
                    <br/>
                    <Link to="/admin/services">Services</Link>
                    <br/>
                    <Link to="/admin/faqs">FAQs</Link>
                    <br/>
                    <Link to="/admin/faqs/1">FAQ Details</Link>
                    <br/>
                    <Link to="/admin/faq-answers/">FAQ Answers</Link>
                    <br/>
                    <Link to="/admin/faq-answers/1">FAQ Answers Details</Link>
                    <br/>
                    <Link to="/admin/service-answers/">Service Answers</Link>
                    <br/>
                    <Link to="/admin/service-answers/1">Service Answers Details</Link>
                </div>
                <div className="col-9">
                    <Route
                        path="/admin/services"
                        exact
                        render={() => <ServicesContainer service={servicesService}/>}/>
                    <Route
                        path="/admin/faqs"
                        exact
                        component={FAQContainer}/>
                    <Route
                        path="/admin/faqs/:id"
                        exact
                        component={FAQDetails}/>
                    <Route
                        path="/admin/faq-answers/"
                        exact
                        component={FAQAnswers}/>
                    <Route
                        path="/admin/faq-answers/:id"
                        exact
                        component={FAQAnswerDetails}/>
                    <Route
                        path="/admin/service-answers/"
                        exact
                        component={ServiceAnswer}/>
                    <Route
                        path="/admin/service-answers/:ids"
                        exact
                        component={ServiceAnswerDetails}/>
                    <Route
                        path="/admin/users"
                        exact
                        component={Users}/>
                    <Route
                        path="/admin/services/:serviceId"
                        exact
                        component={ServicesProviderSearch}/>
                </div>
            </div>
        </Router>
    </div>

export default Admin