import React from 'react'
import FAQService from '../services/FAQService'
class FAQs extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = FAQService.getInstance()
        this.state = {
            faqs: [],
            searchButtonDisabled: false
        }
    }
    componentDidMount() {
        this.faqService
            .findAllFAQs()
            .then(results =>
                this.setState({
                    faqs: results,
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
            .then(this.refreshFAQs());
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
           .then(this.refreshFAQs());
       titleInput.value = "";
       questionInput.value = "";
   }

   deleteFAQ(id) {
        console.log('Delete FAQ Click happened');
        this.faqService.deleteFAQ(id)
            .then(() => this.refreshFAQs());
   }

    render() {
        return(
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
                        this.state.faqs
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
                      <td>
                        <div id="searchButtons">
                          <button id="search" disabled={this.state.searchButtonDisabled} onClick={() => this.searchFAQs()}>Search</button>
                          <button id="clearSearch" disabled={!this.state.searchButtonDisabled} onClick={() => this.clearSearch()}>Clear Search</button>
                        </div>
                      </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default FAQs
