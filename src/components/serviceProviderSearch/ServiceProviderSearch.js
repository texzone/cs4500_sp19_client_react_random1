import React from "react";
import ServiceService from "../../services/ServiceService";
import mockCategory from "../../mock/data/service.providers.mock";

export default class ServicesProviderSearch extends React.Component {

    constructor(props) {
        super(props);
        this.serviceService = ServiceService.getInstance()
        this.state = {
            service: {
                serviceName: '',
                id: 1,
                serviceQuestions: []
            }
        }
    }

    componentDidMount() {
        this.serviceService.findServiceById(this.props.match.params.id)
            .then(serviceCategory => {
                    this.setState({
                        service: serviceCategory
                    });
                }
            );
    }

    generateFilters() {
        let h5s = [];
        if (this.state.service.serviceQuestions != null)
            for (var i = 0; i < this.state.service.serviceQuestions.length; i++) {
                let filter  =
                    <div key={i + " question"}>
                        <h5>{ this.state.service.serviceQuestions[i].question}</h5>
                        { this.generateChoices(i) }
                    </div>;

                h5s.push(filter);
            }
        return h5s;
    }

    generateProviders() {
        let h5s = [];
        if (this.state.service.serviceProviders != null)
            for (var i = 0; i < this.state.service.serviceProviders.length; i++) {
                var serviceProvider = this.state.service.serviceProviders[i];
                let filter  =
                    <div className="row np-flex-wrap" key={i + " provider"}>
                        <div>
                            <img height="200" width="200" src={`https://picsum.photos/300/200?image=${Math.floor(Math.random() * 100)}`}  alt="..."/>
                        </div>
                        <div>
                            <a href=""><h5>{ serviceProvider.name}</h5></a>
                            {/*<div> { serviceProvider.reviews.length } </div>*/}
                            <div> { serviceProvider.yearsInBusiness + " year in business," +  serviceProvider.hires + " hires"} </div>
                        </div>
                        <div>
                            <div>{ serviceProvider.price }</div>
                            <button className="btn btn-primary">View Profile</button>
                        </div>
                    </div>;
                h5s.push(filter);
            }
        return h5s;
    }

    generateChoices(index) {
        let choices = [];
        for (var i = 0; i < this.state.service.serviceQuestions[index].choices.length; i++) {
            choices.push(<div key={i + " choice"}>
                <input type="radio" name="bedroom" value={this.state.service.serviceQuestions[index].choices[i]}/> { this.state.service.serviceQuestions[index].choices[i].choice } <br/>
            </div>)
        }
        return choices;
    }

    render() {


        return (<div>

            <div className="row">
                <div className="input-group input-group-lg col-8">
                    <input type="text" placeholder="Search for providers" className="form-control"/>
                    <input type="text" placeholder="Zip Code" className="form-control"/>
                    <button className="btn btn-primary">Search</button>

                </div>
                <div className="col-4 row">
                    <div className="col-11 text-right">
                        <a href="#">Sign up</a>
                    </div>
                    <div className="col-1">
                        <a href="#">Log in</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    { this.generateFilters() }

                </div>
                <div className="col-9">
                    { this.generateProviders() }
                </div>
            </div>

        </div>)
    }

}