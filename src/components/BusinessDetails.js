import React from 'react'
import ServiceProviderService from "../services/ServiceProviderService";

const states = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI",
                "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP",
                "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA",
                "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV",
                "WY"]

class BusinessDetails extends React.Component {
    constructor(props) {
        super(props)
        this.ServiceProviderService = ServiceProviderService.getInstance();
        this.saveBusinessDetails = this.saveBusinessDetails.bind(this);
        this.businessID = props.match.params.id
        this.state = {
            businessName : "",
            year : "",
            employees : "",
            email : "",
            street : "",
            city : "",
            state : "",
            zip : "",
            facebook : "",
            instagram : "",
            twitter : "",
            card : false,
            cash : false,
            check : false,
            venmo : false,
            paypal : false,
            square : false
        }

    }


    componentDidMount() {
        this.ServiceProviderService
            .findServiceProviderById(this.businessID)
            .then(businessDetails => {
                console.log(businessDetails)
                this.setState({
                  businessName: businessDetails.name,
                  year: businessDetails.yearFounded,
                  employees : businessDetails.numEmployees,
                    email : businessDetails.businessEmail,
                    street : businessDetails.businessAddress.street,
                    city : businessDetails.businessAddress.city,
                    state: businessDetails.businessAddress.state,
                    zip : businessDetails.businessAddress.zipCode,
                    facebook : businessDetails.facebookLink,
                    instagram : businessDetails.instaLink,
                    twitter : businessDetails.twitterLink,
                    card : businessDetails.creditCard,
                    cash : businessDetails.cash,
                    check : businessDetails.check,
                    venmo : businessDetails.venmo,
                    paypal : businessDetails.paypal,
                    square : businessDetails.square

                })
            })
    }

    saveBusinessDetails() {
        const businessName = document.getElementById('business-name').value;
        const businessYear = document.getElementById('year-founded').value;
        const businessEmployees = document.getElementById('number-employees').value;
        const businessEmail = document.getElementById('email').value;
        const businessStreet = document.getElementById('business-street').value;
        const businessCity = document.getElementById('business-city').value;
        const businessState = document.getElementById('business-state').value;
        const businessZip = document.getElementById('business-zip').value;
        const businessFacebook = document.getElementById('facebook').value;
        const businessInstagram = document.getElementById('instagram').value;
        const businessTwitter = document.getElementById('twitter').value;
        const businessCard = document.getElementById('credit').checked;
        const businessCash = document.getElementById('cash').checked;
        const businessCheck = document.getElementById('check').checked;
        const businessVenmo = document.getElementById('venmo').checked;
        const businessPaypal = document.getElementById('paypal').checked;
        const businessSquare = document.getElementById('square').checked;

        this.ServiceProviderService
            .updateServiceProvider({
                id: this.businessID,
                name: businessName,
                yearFounded: businessYear,
                numEmployees: businessEmployees,
                businessEmail: businessEmail,
                businessAddress: {
                    street: businessStreet,
                    city : businessCity,
                    state: businessState,
                    zipCode : businessZip,
                },
                facebookLink : businessFacebook,
                instaLink : businessInstagram,
                twitterLink : businessTwitter,
                creditCard: businessCard,
                cash : businessCash,
                check : businessCheck,
                venmo : businessVenmo,
                paypal : businessPaypal,
                square : businessSquare

           })
            .then (()=> alert('Updated.'))
    }

    render() {
        return(
        <div className="container">
            <h1>Business</h1>
            <br/>
            <div>
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="business-name">Business name</label>
                        <input id="business-name" className="form-control" defaultValue={this.state.businessName} />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="year-founded">Year founded</label>
                        <input id="year-founded" className="form-control"  defaultValue={this.state.year}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="number-employees">Number of employees</label>
                        <input id="number-employees" className="form-control" defaultValue={this.state.employees}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="email">Email</label>
                        <input id="email" className="form-control" defaultValue={this.state.email}/>
                    </div>
                </div>
                <br/>
                <h4>Business address (optional)</h4>
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="business-street">Street</label>
                        <input id="business-street" className="form-control" defaultValue={this.state.street}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <br/>
                        <label htmlFor="business-city">City</label>
                        <input id="business-city" className="form-control" defaultValue={this.state.city}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <br/>
                        <label htmlFor="first-name">State</label>
                        <select id = "business-state" className="form-control">
                            {states.map((state, indx) =>
                                <option value={state} selected={state === this.state.state}>{state}</option>
                            )}
                        </select>
                    </div>
                    <div className="col-6">
                        <br/>
                        <label htmlFor="first-name">Zip</label>
                        <input id="business-zip" className="form-control" defaultValue={this.state.zip}/>
                    </div>
                </div>
                <br/>
                <h4>Payment methods accepted</h4>
                <div className="row">
                    <div className="col-12">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <label><input id = "credit" type="checkbox" defaultChecked={this.state.card}/> Credit card</label>
                            </li>
                            <li className="list-group-item">
                                <label><input id = "cash" type="checkbox" defaultChecked={this.state.cash}/> Cash</label>
                            </li>
                            <li className="list-group-item">
                                <label><input id = "check" type="checkbox" defaultChecked={this.state.check}/> Check</label>
                            </li>
                            <li className="list-group-item">
                                <label><input id = "venmo" type="checkbox" defaultChecked={this.state.venmo}/> Venmo</label>
                            </li>
                            <li className="list-group-item">
                                <label><input id = "paypal"type="checkbox" defaultChecked={this.state.paypal}/> Paypal</label>
                            </li>
                            <li className="list-group-item">
                                <label><input id = "square" type="checkbox" defaultChecked={this.state.square}/> Square</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <br/>
                <h4>Social media</h4>
                <div className="row">
                    <div className="col-12">
                        <label>Facebook</label>
                        <input
                            id="facebook"
                            placeholder="Enter Facebook URL"
                            className="form-control"
                            defaultValue={this.state.facebook}/>
                    </div>
                    <div className="col-12">
                        <br/>
                        <label>Instagram</label>
                        <input
                            id="instagram"
                            placeholder="Enter Instagram URL"
                            className="form-control"
                            defaultValue={this.state.instagram}/>
                    </div>
                    <div className="col-12">
                        <br/>
                        <label>Twitter</label>
                        <input
                            id="twitter"
                            placeholder="Enter Twitter</ URL"
                            className="form-control"
                            defaultValue={this.state.twitter}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <a className="btn btn-success btn-block" onClick={this.saveBusinessDetails}>
                            Save
                        </a>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
        )}
}

export default BusinessDetails