import MIDDLE_TIER_URL from '../Env.js'

export default class ServiceQuestionsService {
    static instance = null;

    static getInstance() {
        if (ServiceQuestionsService.instance === null) {
            ServiceQuestionsService.instance = new ServiceQuestionsService()
        }
        return this.instance
    }

    findServiceQuestionById = id =>
        fetch(MIDDLE_TIER_URL + "/api/service-questions/" + id)
            .then(response => response.json())

    findAllServiceQuestions = () =>
        fetch(MIDDLE_TIER_URL + "/api/service-questions")
            .then(response => response.json())

    filterServiceQuestions = filterParams => console.log("filter")

    addServiceQuestion = (newServiceQuestion) =>
        fetch(MIDDLE_TIER_URL + "/api/service-questions", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: newServiceQuestion.title,
                question: newServiceQuestion.question,
            })
        })
            .then(response => response.json());

    deleteServiceQuestion = (id) =>
        fetch(MIDDLE_TIER_URL + "/api/service-questions/" + id, {method: 'delete'})

    updateServiceQuestion = (updatedFAQ, id) =>
        fetch(MIDDLE_TIER_URL + "/api/service-questions" + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: updatedFAQ.title,
                question: updatedFAQ.question,
            })
        })
            .then(response => response.json());

}

