import MIDDLE_TIER_URL from '../Env.js'
export default class ServiceAnswerService {
    static instance = null;
    static getInstance() {
        if(ServiceAnswerService.instance === null) {
            ServiceAnswerService.instance = new ServiceAnswerService()
        }
        return this.instance
    }
    findServiceAnswerById = serviceAnswerId =>
        fetch(MIDDLE_TIER_URL + "/api/admin/service-answers/" + serviceAnswerId)
            .then(response => response.json())
    findAllServiceAnswers = () =>
        fetch(MIDDLE_TIER_URL + "/api/admin/service-answers")
            .then(response => response.json())
}
