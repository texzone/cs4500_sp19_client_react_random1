import MIDDLE_TIER_URL from '../Env.js'

export default class ServiceProviderService {
    static instance = null;
    static getInstance() {
        if(ServiceProviderService.instance === null) {
            ServiceProviderService.instance = new ServiceProviderService()
        }
        return this.instance
    }
    findServiceProviderById = providerId =>
        fetch(MIDDLE_TIER_URL + "/api/service_providers/" + providerId)
            .then(response => response.json())
    findServiceProviderByName = providerName =>
        fetch(MIDDLE_TIER_URL + "/api/service_providers/name/" + providerName)
            .then(response => response.json())
    findAllServiceProviders = () =>
        fetch(MIDDLE_TIER_URL + "/api/service_providers")
            .then(response => response.json())
    filterServiceProviders = filterParams =>
        fetch(MIDDLE_TIER_URL + "/api/service_providers/filter?provider=" + filterParams.provider + "&zipCode="
              + filterParams.zipCode)
            .then(response => response.json())
}
