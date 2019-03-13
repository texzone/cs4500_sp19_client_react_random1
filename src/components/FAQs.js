import React from 'react'
import FAQService from '../services/FAQService'
class FAQs extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = FAQService.getInstance()
        this.state = {
            faqs: []
        }
    }
    componentDidMount() {
        this.faqService
            .findAllFAQs()
            .then(results =>
                this.setState({
                    faqs: results
                })
            )
    }



    searchFAQs() {
     console.log('Click happened');
     const titleInput = document.getElementById('titleInput');
     const questionInput = document.getElementById('questionInput');
     var title = titleInput.value
     var question = questionInput.value
     if(title === "" && question === "") {
       this.faqService
           .findAllFAQs()
           .then(results =>
               this.setState({
                   faqs: results
               })
           )
     }
     this.faqService
         .filterFAQs({title: title, question: question})
         .then(results =>
             this.setState({
                 faqs: results
             })
         )
   }

    render() {
        return(
            <div>
                <h3>Frequently Asked Questions</h3>
                <table className="table">
                    <tr>
                        <th>Title</th>
                        <th>Question</th>
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
                    </tr>
                    <tbody>
                    {
                        this.state.faqs
                            .map(faq =>
                                <tr key={faq.id}>
                                    <td>{faq.title}</td>
                                    <td>{faq.question}</td>
                                </tr>
                            )
                    }
                    </tbody>
                    <tr>
                      <td>
                        <button onClick={() => this.searchFAQs()}>Search</button>
                      </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default FAQs
