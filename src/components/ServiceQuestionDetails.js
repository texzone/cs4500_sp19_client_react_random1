import React from 'react'
import ServiceQuestionsService from "../services/ServiceQuestionsService";

class ServiceQuestionDetails extends React.Component {
    constructor(props) {
        super(props);
        this.serviceQuestionsService = ServiceQuestionsService.getInstance();
        this.state = {
            serviceQuestion: {
                choiceAnswer: 'Placeholder Choice',
                title: 'Placeholder Title',
                question: 'Placeholder questions',
                id: 1
            }
        }
    }
    componentDidMount() {
        this.findById(this.props.id);
    }

    findById = id =>
        this.serviceQuestionsService
            .findServiceQuestionById(id)
            .then(serviceQuestion => {
                    this.props.history.push("/admin/service-questions/" + id);
                    this.setState({
                        serviceQuestion: serviceQuestion
                    })
                }
            );

    update = (id, body) => {
        this.serviceQuestionsService.updateServiceQuestion(id, body)
            .then(serviceQuestion => {
                this.setState( {
                    serviceQuestion: serviceQuestion
                })
            })
    }

    render() {
        return(
            <div>
                <h3>Service Question Details</h3>
                <label>ID</label><br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.serviceQuestion.id}/>
                <label>Title</label><br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.serviceQuestion.title}/>
                <label>Question</label><br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.serviceQuestion.question}/>
                <label>Choice</label><br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.serviceQuestion.choiceAnswer}/>

                <button onClick={() => this.update(this.state.serviceQuestion.id, this.state.serviceQuestion)}>Update</button>
            </div>
        )
    }
}

export default ServiceQuestionDetails
