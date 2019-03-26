import React from 'react'
import ServiceService from '../../services/ServiceService'
import Services from '../views/Services'
class ServicesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.serviceService = this.props.service
        this.state = 
        { 
            services: [],
            pageNumber: 1,
            itemsPerPage: 10
        }
        this.onChangeItemsPerPage = this.onChangeItemsPerPage.bind(this)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.createPageButtons = this.createPageButtons.bind(this)
    }
    
    componentDidMount() {
        this.serviceService
            .findAllServices()
            .then(results =>
                    this.setState({
                        services: results
                    })
                 )
    }

    onChangeItemsPerPage = () =>
    {
        var selectorID = document.getElementById("selector");
        var pageText = selectorID.options[selectorID.selectedIndex].text;

        if (pageText === "10") {
            this.setState({itemsPerPage: 10, pageNumber: 1})
        }
        if (pageText === "25") {
            this.setState({itemsPerPage: 25, pageNumber: 1})
        }
        if (pageText === "50") {
            this.setState({itemsPerPage: 50, pageNumber: 1})
        }
        if (pageText === "All") {
            this.setState({itemsPerPage: -1, pageNumber: 1})
        }

    }

    previousPage = () =>
    {
        if (this.state.pageNumber !== 1) {
            this.setState({pageNumber: (this.state.pageNumber - 1) })
        }
    }

    nextPage = () =>
    {
        var totalPages = Math.ceil(this.state.services.length / this.state.itemsPerPage);
        if (this.state.pageNumber + 1 <= totalPages) {
            this.setState({pageNumber: (this.state.pageNumber + 1) })
        }
    }

    createPageButtons = () => 
    {
        var totalPages = 1
        if (this.state.itemsPerPage !== -1) {
            totalPages = Math.ceil(this.state.services.length / this.state.itemsPerPage);
        }
        var i;
        for (i = 1; i < totalPages + 1; i++) {
            if ((document.getElementById("Button " + i)) === null)
            {
                console.log(i);
                var button = document.createElement("BUTTON");
                var buttonText = document.createTextNode("" + i);
                button.appendChild(buttonText);
                button.type = "button";
                button.id = "Button " + i;
                button.value = i;
                button.onclick = function(e) {
                    this.setState({pageNumber: e.target.value})
                }.bind(this);
                document.getElementById("pageButtons").appendChild(button);
            }
        }
    }
    
    render() {
        return (
                <Services 
                services={this.state.services.slice(
                ((this.state.pageNumber * this.state.itemsPerPage) - this.state.itemsPerPage), 
                ((this.state.pageNumber * this.state.itemsPerPage) - 1)
                )}
                onChangeItemsPerPage={this.onChangeItemsPerPage}
                nextPage={this.nextPage}
                previousPage={this.previousPage}
                createPageButtons={this.createPageButtons}
                />)
    }
 
}
export default ServicesContainer;
