import React from 'react'
import ServiceAnswerService from '../services/ServiceAnswerService'

class ServiceAnswer extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswer= ServiceAnswerService.getInstance()
        this.state = {
            serviceAnswers: []
        }
    }

    componentDidMount() {
        this.serviceAnswer
            .findAllServiceAnswers()
            .then(serviceAnswers =>
                this.setState({
                    serviceAnswers: serviceAnswers
                })
            )
    }

    render() {
        return (
            <div>
                <h3>Service Answers</h3>
                <table className="table">
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                    <tbody>
                    {
                        this.state.serviceAnswers
                            .map(serviceAnswer =>
                                <tr key={serviceAnswer.id}>
                                    <td>{serviceAnswer.question}</td>
                                    <td>{serviceAnswer.answer}</td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ServiceAnswer