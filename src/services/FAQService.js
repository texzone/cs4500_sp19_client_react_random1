import MIDDLE_TIER_URL from '../Env.js'
export default class FAQService {
    static instance = null;
    static getInstance() {
        if(FAQService.instance === null) {
            FAQService.instance = new FAQService()
        }
        return this.instance
    }
    findFAQById = id =>
        fetch(MIDDLE_TIER_URL + "/api/faqs/" + id)
            .then(response => response.json())
    findAllFAQs = () =>
        fetch(MIDDLE_TIER_URL + "/api/faqs")
            .then(response => response.json())
    filterFAQs = filterParams =>
        fetch(MIDDLE_TIER_URL + "/api/faqs/filter?title=" + filterParams.title + "&question=" + filterParams.question)
        .then(response => response.json())
    addFAQ = (newFAQ) =>
        fetch(MIDDLE_TIER_URL + "/api/faqs/create?title=" + newFAQ.title + "&question=" + newFAQ.question)
            .then(response => response.json());
};
