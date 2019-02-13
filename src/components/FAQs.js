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
    render() {
        return(
            <div>
                <h3>Frequently Asked Questions</h3>
                <table className="table">
                    <tr>
                        <th>Title</th>
                        <th>Question</th>
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
                </table>
            </div>
        )
    }
}

export default FAQs