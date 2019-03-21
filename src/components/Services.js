import React from 'react'
import ServiceService from '../services/ServiceService'
class Services extends React.Component {
    constructor(props) {
        super(props)
            this.serviceService = ServiceService.getInstance()
            this.state = {
                services: [],
                pageNumber: 1,
                itemsPerPage: 10
            }
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
    onChangeItemsPerPage() {
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
    previousPage() {
        if (this.state.pageNumber !== 1) {
            this.setState({pageNumber: (this.state.pageNumber - 1) })
        }
    }
    nextPage() {
        var totalPages = Math.ceil(this.state.services.length / this.state.itemsPerPage);
        if (this.state.pageNumber + 1 <= totalPages) {
            this.setState({pageNumber: (this.state.pageNumber + 1) })
        }
    }
    choosePage(newPage) {
        this.setState({pageNumber: newPage })

    }
    createPageButtons() {
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
        let div = 
            (
                <div>
                <h3>Services</h3>
                <table className="table">
                <tr>
                <th>Title</th>
                </tr>
                <tbody>
                {
                    this.state.services.slice(   ((this.state.pageNumber * this.state.itemsPerPage) - this.state.itemsPerPage), ((this.state.pageNumber * this.state.itemsPerPage) - 1))
                        .map(service =>
                            <tr key={service.id}>
                                <td>{service.serviceName}</td>
                                <td>{service.serviceCategories}</td>
                            </tr>
                        )
                }
                </tbody>
                <tr>
                    <th><button id="previous" onClick={() => this.previousPage()}>Previous</button></th>
                    <th><div id="pageButtons"> </div></th>
                    <th><button id="next" onClick={() => this.nextPage()}>Next</button></th>
                </tr>
                <tr>
                    <th>
                      <div id = "dropdown" >
                          <select id="selector" onChange={() => this.onChangeItemsPerPage()}>
                              <option value="1" selected="selected">10</option>
                              <option value="2">25</option>
                              <option value="3">50</option>
                              <option value="4">100</option>
                              <option value="5">All</option></select>
                      </div>
                    </th>
                </tr>
            </table>
                </div>
            )
            this.createPageButtons()
            return div;
    }
}

export default Services
