var srvCatData = require('../data/service_categories.mock.json')

global.fetch = jest.fn()
    .mockImplementation((url, config) => {
        if(!config) {
            if(url.indexOf('api/categories/0') != -1) { 
                return srvCatData[0]
            } else if(url.indexOf('api/categories/1') != -1) {
                return srvCatData[1]
            } else if(url.indexOf('api/categories') != -1) {
                return new Promise((resolve, reject) => {
                    resolve({ json: function() {
                        return srvCatData
                    }})})
            }
        }});
