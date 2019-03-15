import React from 'react'
import FAQService from '../services/FAQService'
class FAQs extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = FAQService.getInstance()
        this.state = {
            faqs: [],
            searchButtonDisabled: false,
            pageNumber: 1,
            itemsPerPage: 10
        }
    }
    componentDidMount() {
        this.faqService
            .findAllFAQs()
            .then(results =>
                this.setState({
                    faqs: results.slice(),
                    searchButtonDisabled: false
                })
            )
    }

    refreshFAQs() {
        this.faqService.findAllFAQs().then(results =>
        this.setState({
            faqs: results
                      }))
    }

    searchFAQs() {
     const titleInput = document.getElementById('titleInput');
     const questionInput = document.getElementById('questionInput');
     var title = titleInput.value
     var question = questionInput.value
     if(title === "" && question === "") {
         this.faqService
           .findAllFAQs()
           .then(results =>
               this.setState(prevState => ({
                   faqs: results,
                   searchButtonDisabled: false
               }))
           )
           return;
     }
     this.faqService
         .filterFAQs({title: title, question: question})
         .then(results =>
             this.setState(prevState => ({
                 faqs: results,
                 searchButtonDisabled: !prevState.searchButtonDisabled
             }))
         )
   }
   clearSearch() {
     const titleInput = document.getElementById('titleInput');
     const questionInput = document.getElementById('questionInput');
     titleInput.value = ""
     questionInput.value = ""
     this.faqService
         .findAllFAQs()
         .then(results =>
             this.setState(prevState => ({
                 faqs: results,
                 searchButtonDisabled: false
             }))
         )
   }
    onChangeItemsPerPage() {
        var currButtons = document.getElementById("pageButtons").innerHTML = "";
        var eID = document.getElementById("selector");
        var pageText = eID.options[eID.selectedIndex].text;

        if (pageText == "10") {
            this.setState({itemsPerPage: 10, pageNumber: 1})
        }
        if (pageText == "25") {
            this.setState({itemsPerPage: 25, pageNumber: 1})
        }
        if (pageText == "50") {
            this.setState({itemsPerPage: 50, pageNumber: 1})
        }
        if (pageText == "All") {
            this.setState({itemsPerPage: 1000000, pageNumber: 1})
        }
    }
    previousPage() {
        if (this.state.pageNumber != 1) {
            var temp = this.state.pageNumber - 1;
            this.setState({pageNumber: temp })
        }
    }
    nextPage() {
        var totalPages = Math.ceil(this.state.faqs.length / this.state.itemsPerPage);
        if (this.state.pageNumber + 1 <= totalPages) {
            var temp = this.state.pageNumber + 1;
            this.setState({pageNumber: temp })
        }
    }
    choosePage(newPage) {
        this.setState({pageNumber: newPage })

    }
    createPageButtons() {
        var totalPages = Math.ceil(this.state.faqs.length / this.state.itemsPerPage);
        var i;
        //while (currButtons.firstChild) {
        //    currButtons.removeChild(currButtons.firstChild);
        //}
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
                button.onclick = function() {
                    this.setState({pageNumber: i})
                }.bind(this);
                //var buttonPanel = document.getElementById("pageButtons");
                //buttonPanel.appendChild(button);
                document.getElementById("pageButtons").appendChild(button);
            }
        }
    }

   addFAQ() {
        console.log('Add FAQ Click happened');
        const titleInput = document.getElementById('titleInput');
        const questionInput = document.getElementById('questionInput');
        var title = titleInput.value;
        var question = questionInput.value;
        if (title == "" || question == "") {
            alert("Please add a question")
        }
        this.faqService
            .addFAQ({title: title, question: question})
            .then(() => this.refreshFAQs());
       titleInput.value = ""
       questionInput.value = ""
   }

   updateFAQ(id) {
       const titleInput = document.getElementById('titleInput');
       const questionInput = document.getElementById('questionInput');
       var title = titleInput.value;
       var question = questionInput.value;
       if (title == "" & question == "") {

       }
       this.faqService
           .updateFAQ({title: title, question: question}, id)
           .then(() => this.refreshFAQs());
       titleInput.value = "";
       questionInput.value = "";
   }

   deleteFAQ(id) {
        console.log('Delete FAQ Click happened');
        this.faqService.deleteFAQ(id)
            .then(() => this.refreshFAQs());
   }

    render() {
        debugger;
        let div = (
            <div>
                <h3>Frequently Asked Questions</h3>
                <table className="table">
                    <tr>
                        <th>Title</th>
                        <th>Question</th>
                        <th></th>
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
                            <button onClick={() => this.addFAQ()}>Add</button>
                            <button>Save</button>
                        </th>
                    </tr>
                    <tbody>
                    {
                        this.state.faqs.slice(   ((this.state.pageNumber * this.state.itemsPerPage) - this.state.itemsPerPage), ((this.state.pageNumber * this.state.itemsPerPage) - 1))
                            .map(faq =>
                                <tr key={faq.id}>
                                    <td>{faq.title}</td>
                                    <td>{faq.question}</td>
                                    <td>
                                        <button onClick={() => this.deleteFAQ(faq.id)}>Delete</button>
                                        <button onClick={() => this.updateFAQ(faq.id)}>Edit</button>
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
                                  <button id="search" disabled={this.state.searchButtonDisabled} onClick={() => this.searchFAQs()}>Search</button>
                                  <button id="clearSearch" disabled={!this.state.searchButtonDisabled} onClick={() => this.clearSearch()}>Clear Search</button>
                              </div>
                        </th>
                    </tr>
                </table>
            </div>)
        this.createPageButtons()
        return div;
    }
}

export default FAQs
