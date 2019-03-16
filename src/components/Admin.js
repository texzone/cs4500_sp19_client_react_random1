import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
/*import Users from './Users'
import UserDetails from './UserDetails'
*/
import Services from './Services'
/*
import ServiceDetails from './ServiceDetails'
import ServiceCategories from './ServiceCategories'
import ServiceCategoryDetails from './ServiceCategoryDetails'
import ServiceQuestions from './ServiceQuestions'
import ServiceQuestionDetails from './ServiceQuestionDetails'
import ServiceAnswers from './ServiceAnswers'
import ServiceAnswerDetails from './ServiceAnswerDetails'*/
import FAQs from './FAQs'
import FAQDetails from './FAQDetails'
import FAQAnswers from './FAQAnswers'
import FAQAnswerDetails from './FAQAnswerDetails'
import Users from './Users'
import UserDetails from './UserDetails'

const Admin = () =>
    <div>
        <h2>Admin</h2>
        <Router>
            <div className="row">
                <div className="col-3">
                    <Link to="/admin/users">Users</Link>
                    <br/>
                    <Link to="/admin/users/1">User Details</Link>
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
                </div>
                <div className="col-9">
                    <Route
                        path="/admin/services"
                        exact
                        component={Services}/>
                    <Route
                        path="/admin/faqs"
                        exact
                        component={FAQs}/>
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
                </div>
            </div>
        </Router>
    </div>

export default Admin
