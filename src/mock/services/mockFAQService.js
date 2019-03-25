var faqData = require('../data/faq.mock.json')

global.fetch = jest.fn()
  .mockImplementation(url => {
    if(url.includes("/faqs/102")) {
      return new Promise((resolve,reject) => {
        resolve({json:function() {
          return {
            "id":102,
            "question": "What is my second question?",
            "title": "Q2"
          }
        }});
      });
    }
    else if(url.includes("/faqs") {
      return new Promise(resolve => resolve(faqsData))

    }
  });
