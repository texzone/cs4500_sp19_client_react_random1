import MIDDLE_TIER_URL from '../Env.js'
export default class ServiceService {
    static instance = null;
    static getInstance() {
        if(ServiceService.instance === null) {
            ServiceService.instance = new ServiceService()
        }
        return this.instance
    }
    findServiceById = serviceId =>
        fetch(MIDDLE_TIER_URL + "/api/services/" + serviceId)
            .then(response => response.json())
    findAllServices = () =>
        fetch(MIDDLE_TIER_URL + "/api/services")
            .then(response => response.json())
}
