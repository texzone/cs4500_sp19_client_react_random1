var srvData = require('../data/service.mock.json')

global.fetch = jest.fn()
    .mockImplementation((url, config) => {
        if(!config) {
            if(url.indexOf('api/services/0') != -1) {
                return srvData[0]
            } else if(url.indexOf('api/services/1') != -1) {
                return srvData[1]
            } else if(url.indexOf('api/services') != -1) {
                return new Promise((resolve, reject) => {
                    resolve({ json: function() {
                        return srvData
                    }})})
            }
        }});

