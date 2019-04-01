import React from 'react'
import ServiceQuestionsService from "../services/ServiceQuestionsService";

class ServiceQuestions extends React.Component {
    constructor(props) {
        super(props);
        this.serviceQuestionsService = ServiceQuestionsService.getInstance();
        this.state = {
            serviceQuestions: [],
            searchButtonDisabled: false,
            pageNumber: 1,
            itemsPerPage: 10
        }
    }
    componentDidMount() {
        this.serviceQuestionsService
            .findAllServiceQuestions()
            .then(results =>
                this.setState({
                    serviceQuestions: results.slice(),
                    searchButtonDisabled: false
                })
            )
    }

    refreshServiceQuestions() {
        this.serviceQuestionsService.findAllServiceQuestions().then(results =>
            this.setState({
                serviceQuestions: results
            }))
    }

    searchServiceQuestions() {
        const titleInput = document.getElementById('titleInput');
        const questionInput = document.getElementById('questionInput');
        var title = titleInput.value;
        var question = questionInput.value;
        if(title === "" && question === "") {
            this.serviceQuestionsService
                .findAllServiceQuestions()
                .then(results =>
                    this.setState(() => ({
                        serviceQuestions: results,
                        searchButtonDisabled: false
                    }))
                );
            return;
        }
        this.serviceQuestionsService
            .filterServiceQuestions({title: title, question: question})
            .then(results =>
                this.setState(prevState => ({
                    serviceQuestions: results,
                    searchButtonDisabled: !prevState.searchButtonDisabled
                }))
            )
    }

    clearSearch() {
        const titleInput = document.getElementById('titleInput');
        const questionInput = document.getElementById('questionInput');
        titleInput.value = "";
        questionInput.value = "";
        this.serviceQuestionsService
            .findAllServiceQuestions()
            .then(results =>
                this.setState(() => ({
                    serviceQuestions: results,
                    searchButtonDisabled: false
                }))
            )
    }

    onChangeItemsPerPage() {
        var currButtons = document.getElementById("pageButtons").innerHTML = "";
        var eID = document.getElementById("selector");
        var pageText = eID.options[eID.selectedIndex].text;

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
            this.setState({itemsPerPage: 1000000, pageNumber: 1})
        }
    }

    previousPage() {
        if (this.state.pageNumber !== 1) {
            var temp = this.state.pageNumber - 1;
            this.setState({pageNumber: temp })
        }
    }

    nextPage() {
        var totalPages = Math.ceil(this.state.serviceQuestions.length / this.state.itemsPerPage);
        if (this.state.pageNumber + 1 <= totalPages) {
            var temp = this.state.pageNumber + 1;
            this.setState({pageNumber: temp })
        }
    }

    choosePage(newPage) {
        this.setState({pageNumber: newPage })

    }

    createPageButtons() {
        var totalPages = Math.ceil(this.state.serviceQuestions.length / this.state.itemsPerPage);
        var i;

        for (i = 1; i < totalPages + 1; i++) {
            if ((document.getElementById("Button " + i)) == null)
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

    addServiceQuestion() {
        console.log('Add Service Click happened');
        const titleInput = document.getElementById('titleInput');
        const questionInput = document.getElementById('questionInput');
        var title = titleInput.value;
        var question = questionInput.value;
        if (title === "" || question === "") {
            alert("Please add a question")
        }
        this.serviceQuestionsService
            .addServiceQuestion({title: title, question: question})
            .then(() => this.refreshServiceQuestions());
        titleInput.value = "";
        questionInput.value = "";
    }

    updateServiceQuestion(id) {
        const titleInput = document.getElementById('titleInput');
        const questionInput = document.getElementById('questionInput');
        var title = titleInput.value;
        var question = questionInput.value;
        this.serviceQuestionsService
            .updateServiceQuestion({title: title, question: question}, id)
            .then(() => this.refreshServiceQuestions());
        titleInput.value = "";
        questionInput.value = "";
    }

    deleteServiceQuestion(id) {
        console.log('Delete ServiceQuestion Click happened');
        this.serviceQuestionsService.deleteServiceQuestion(id)
            .then(() => this.refreshServiceQuestions());
    }

    render() {
        let div = (
            <div>
                <h3>Service Questions</h3>
                <table className="table">
                    <tr>
                        <th>Title</th>
                        <th>Question</th>
                        <th> </th>
                    </tr>
                    <tr>
                        <th>
                            <input
                                type="text"
                                id="titleInput"
                                placeholder="Title"
                                title="Type in a name">
                            </input>
                        </th>
                        <th>
                            <input
                                type="text"
                                id="questionInput"
                                placeholder="Question"
                                title="Type in a name">
                            </input>
                        </th>
                        <th>
                            <button onClick={() => this.addServiceQuestion()}>Add</button>
                        </th>
                    </tr>
                    <tbody>
                    {
                        this.state.serviceQuestions.slice(((this.state.pageNumber * this.state.itemsPerPage) - this.state.itemsPerPage), ((this.state.pageNumber * this.state.itemsPerPage) - 1))
                            .map(serviceQuestion =>
                                <tr key={serviceQuestion.id} onClick={this.props.history.push("/admin/service-questions/" + serviceQuestion.id)}>
                                    <td>{serviceQuestion.title}</td>
                                    <td>{serviceQuestion.question}</td>
                                    <td>
                                        <button onClick={() => this.deleteServiceQuestion(serviceQuestion.id)}>Delete</button>
                                        <button onClick={() => this.updateServiceQuestion(serviceQuestion.id)}>Edit</button>
                                    </td>
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
                        <th>
                            <div id="searchButtons">
                                <button id="search" disabled={this.state.searchButtonDisabled} onClick={() => this.searchServiceQuestions()}>Search</button>
                                <button id="clearSearch" disabled={!this.state.searchButtonDisabled} onClick={() => this.clearSearch()}>Clear Search</button>
                            </div>
                        </th>
                    </tr>
                </table>
            </div>);
        this.createPageButtons();
        return div;
    }
}

export default ServiceQuestions