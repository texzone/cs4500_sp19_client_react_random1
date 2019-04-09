import React from 'react'

const Register = () =>
    <div className="container">
        <h1>Create your account</h1>
        <br/>
        <div>
            <div className="row">
                <div className="col-6">
                    <label for="first-name">First Name</label>
                    <input id="first-name" type="text" className="form-control"/>
                </div>
                <div className="col-6">
                    <label for="last-name">Last Name</label>
                    <input id="last-name" type="text" className="form-control"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label for="email">Email</label>
                    <input id="email" type="email" className="form-control"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label for="password">Password</label>
                    <input id="password" type="password" className="form-control"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <a href="/profile" className="btn btn-primary btn-block">
                        Create Account
                    </a>
                </div>
            </div>
        </div>
    </div>

export default Register
