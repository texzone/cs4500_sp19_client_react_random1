import React from 'react'
import ServiceAnswerService from '../services/ServiceAnswerService'
class ServiceAnswerDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswerService = ServiceAnswerService.getInstance()

        this.state = {
            answers: [],
            answer: {
                choiceAnswer: '',
                id: 1
            }
        }
    }
    componentDidMount() {
        this.serviceAnswerService
            .findAllServiceAnswers()
            .then(answers => {
                    this.props.history.push("/admin/service-answers/" + answers[0].id)
                    this.setState({
                        answers: answers,
                        answer: answers[0]
                    })
                }
            )
    }
    selectAnswer = id =>
        this.serviceAnswerService
            .findServiceAnswerById(id)
            .then(answer => {
                    this.props.history.push("/admin/service-answers/" + id)
                    this.setState({
                        answer: answer
                    })
                }
            )
    render() {
        return(
            <div>
                <h3>Answer Details</h3>
                <select
                    value={this.state.answer.id}
                    onChange={(e) => this.selectAnswer(e.target.value)}
                    className="form-control">
                    {
                        this.state.answers
                            .map(answer =>
                                <option
                                    value={answer.id}
                                    key={answer.id}>
                                    {answer.id}
                                </option>
                            )
                    }
                </select>
                <label>Title</label><br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.answer.title}/>
                <label>Question</label><br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.answer.question}/>
            </div>
        )
    }
}

export default ServiceAnswerDetails
