import MIDDLE_TIER_URL from '../Env.js'
export default class FAQAnswerService {
    static instance = null;
    static getInstance() {
        if(FAQAnswerService.instance === null) {
            FAQAnswerService.instance = new FAQAnswerService()
        }
        return this.instance
    }
    findFAQAnswerById = id =>
        fetch(MIDDLE_TIER_URL + "/api/faq-answers/" + id)
            .then(response => response.json())
    findAllFAQAnswers = () =>
        fetch(MIDDLE_TIER_URL + "/api/faq-answers")
            .then(response => response.json())
}
