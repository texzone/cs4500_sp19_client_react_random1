import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
/*import Users from './Users'
import UserDetails from './UserDetails'
import Services from './Services'
import ServiceDetails from './ServiceDetails'
import ServiceCategories from './ServiceCategories'
import ServiceCategoryDetails from './ServiceCategoryDetails'
import ServiceQuestions from './ServiceQuestions'
import ServiceQuestionDetails from './ServiceQuestionDetails'
import ServiceAnswers from './ServiceAnswers'
import ServiceAnswerDetails from './ServiceAnswerDetails'*/
import FAQs from './FAQs'
import FAQDetails from './FAQDetails'
//import FAQAnswers from './FAQAnswers'
//import FAQAnswerDetails from './FAQAnswerDetails'

const Admin = () =>
    <div>
        <h2>Admin</h2>
        <Router>
            <div className="row">
                <div className="col-3">
                    <Link to="/admin/faqs">FAQs</Link>
                    <br/>
                    <Link to="/admin/faqs/1">FAQ Details</Link>
                    <br/>
                </div>
                <div className="col-9">
                    <Route
                        path="/admin/faqs"
                        exact
                        component={FAQs}/>
                    <Route
                        path="/admin/faqs/:id"
                        exact
                        component={FAQDetails}/>
                </div>
            </div>
        </Router>
    </div>

export default Admin