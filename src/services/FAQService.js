import MIDDLE_TIER_URL from '../Env.js'

export default class FAQService {
    static instance = null;

    static getInstance() {
        if (FAQService.instance === null) {
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
        fetch(MIDDLE_TIER_URL + "/api/faqs/filter?title=" + filterParams.title + "&question="
              + filterParams.question)
            .then(response => response.json())
    addFAQ = (newFAQ) =>
        fetch(MIDDLE_TIER_URL + "/api/faqs", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                                     title: newFAQ.title,
                                     question: newFAQ.question,
                                 })
        })
            .then(response => response.json());
    deleteFAQ = (id) =>
        fetch(MIDDLE_TIER_URL + "/api/faqs/delete/" + id, {method: 'delete'})
    updateFAQ = (updatedFAQ, id) =>
        fetch(MIDDLE_TIER_URL + "/api/faqs/" + id, {
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
};
