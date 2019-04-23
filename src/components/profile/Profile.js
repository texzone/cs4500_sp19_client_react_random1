import React from "react";

export default class Profile extends React.Component {
    render() {
        return (
            <div className="container"><h1>Profile</h1>
                <br/>
                <div>
                    <h4>Legal name</h4>
                    <div className="row">
                        <div className="col-6"><label htmlFor="first-name">First name</label><input id="first-name"
                                                                                                    className="form-control"/>
                        </div>
                        <div className="col-6"><label htmlFor="last-name">Last name</label><input id="last-name"
                                                                                                  className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <h4>Date of birth</h4>
                    <div className="row">
                        <div className="col-4"><label htmlFor="first-name">Month</label>
                            <select
                                className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select></div>
                        <div className="col-4"><label htmlFor="last-name">Day</label>
                            <select
                                className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                        </div>
                        <div className="col-4"><label htmlFor="last-name">Year</label>
                            <select
                                className="form-control">
                                <option>1997</option>
                                <option>1998</option>
                                <option>1999</option>
                                <option>2000</option>
                                <option>2001</option>
                                <option>2002</option>
                                <option>2004</option>
                                <option>2005</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <h4>Home address</h4>
                    <div className="row">
                        <div className="col-12"><label htmlFor="first-name">Street</label><input id="first-name"
                                                                                                 className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"><label htmlFor="first-name">City</label><input id="first-name"
                                                                                               className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6"><label htmlFor="first-name">State</label><select
                            className="form-control">
                            <option>MA</option>
                            <option>NH</option>
                            <option>NY</option>
                            <option>CA</option>
                        </select></div>
                        <div className="col-6"><label htmlFor="first-name">Zip</label><input id="first-name"
                                                                                             className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-12"><label htmlFor="email">Email</label><input id="email"
                                                                                           className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-12"><a className="btn btn-primary btn-block text-white">Update
                            Account</a></div>
                    </div>
                    <br/><br/><br/><br/>

                </div>
            </div>

        )
    }
}
