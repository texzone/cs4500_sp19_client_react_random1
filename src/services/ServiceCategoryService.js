import MIDDLE_TIER_URL from '../Env.js'

export default class ServiceCategoryService {
    static instance = null;
    static getInstance() {
        if(ServiceCategoryService.instance === null) {
            ServiceCategoryService.instance = new ServiceCategoryService()
        }
        return this.instance
    }
    findServiceCategoryById = categoryId =>
        fetch(MIDDLE_TIER_URL + "/api/categories/" + categoryId)
            .then(response => response.json())
    findAllServiceCategories = () =>
        fetch(MIDDLE_TIER_URL + "/api/categories")
            .then(response => response.json())
}
