import React from "react";
import ServiceService from "../../services/ServiceService";
import ServiceProvider from "./ServiceProvider";

export default class ServicesProviderSearch extends React.Component {

    constructor(props) {
        super(props);
        this.serviceService = ServiceService.getInstance()
        this.state = {
            service: {
                serviceName: '',
                id: 1,
                serviceQuestions: []
            },
            backupService: {
                serviceName: '',
                id: 1,
                serviceQuestions: []
            },
            serviceProviders: []
        }
    }

    componentDidMount() {
        if(this.props.match.params.id == -1) {
          this.setState({
            serviceProviders: this.props.location.state.serviceProviders
          })
        } else {
        this.serviceService.findServiceById(this.props.match.params.id)
            .then(serviceCategory => {
                    this.setState({
                        service: serviceCategory,
                        backupService: serviceCategory,
                        serviceProviders: serviceCategory.serviceProviders
                    });
                }
            );
          }
        }

    generateFilters() {
        let h5s = [];
        if (this.state.service.serviceQuestions != null)
            for (var i = 0; i < this.state.service.serviceQuestions.length; i++) {
                let filter =
                    <div key={i + " question"}>
                        <h5>{this.state.service.serviceQuestions[i].question}</h5>
                        {this.generateChoices(i, this.state.service.serviceQuestions[i].question)}
                    </div>;

                h5s.push(filter);
            }
        return h5s;
    }

    generateProviders() {
        let h5s = [];
        if (this.state.serviceProviders.length != 0)
            for (var i = 0; i < this.state.serviceProviders.length; i++) {
                var serviceProvider = this.state.serviceProviders[i];
                let filter = <ServiceProvider serviceProvider={serviceProvider} key={i}/>;
                h5s.push(filter);
            }
        return h5s;
    }

    generateChoices(index, question) {
        let choices = [];
        for (var i = 0; i < this.state.service.serviceQuestions[index].choices.length; i++) {
            choices.push(<div key={i + " choice"}>
                <input type="radio" name="bedroom"
                       value={this.state.service.serviceQuestions[index].choices[i].choice.toString()}/> {this.state.service.serviceQuestions[index].choices[i].choice}
                <br/>
            </div>)
        }
        return choices;
    }

    render() {
        return (<div>
            <div className="row">
                <div className="input-group input-group-lg col-8">
                    <input type="text" placeholder="Search for providers" className="form-control" onChange={(e) => this.filterProviders(e.target.value)}/>
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
                    {this.generateFilters()}

                </div>
                <div className="col-9">
                    {this.generateProviders()}
                </div>
            </div>

        </div>)
    }

    filterProviders(serviceProviderName) {
        if (serviceProviderName !== "") {
            let providers = this.state.serviceProviders;
            const result = providers.filter(provider => this.contains(provider.name, serviceProviderName));
            this.setState({
                serviceProviders: result
            })
        } else {
            this.setState({
               serviceProviders: []
            })
        }

    }

    contains(providerName = String, searchName) {
        return providerName.toLowerCase().includes(searchName.toLowerCase());
    }

}
