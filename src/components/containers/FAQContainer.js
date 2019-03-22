import React from 'react'
import FAQService from '../../services/FAQService'
import FAQSearch from '../views/FAQSearch'
import FAQTable from '../views/FAQTable'

class FAQContainer extends React.Component {
  constructor(props) {
      super(props)
      this.faqService = FAQService.getInstance()
      this.state = {
          faqs: [],
          searchButtonDisabled: false,
          pageNumber: 1,
          itemsPerPage: 10
      }
      // bind functions here
      this.refreshFAQs = this.refreshFAQs.bind(this)
      this.searchFAQs = this.searchFAQs.bind(this)
      this.clearSearch = this.clearSearch.bind(this)
      this.deleteFAQ = this.deleteFAQ.bind(this)

  }

  componentDidMount() {
      this.faqService
          .findAllFAQs()
          .then(results =>
              this.setState({
                  faqs: results.slice(),
                  searchButtonDisabled: false
              })
          )
  }

  refreshFAQs() {
      this.faqService.findAllFAQs().then(results =>
      this.setState({
          faqs: results
                    }))
  }

  deleteFAQ(id) {
       console.log('Delete FAQ Click happened');
       this.faqService.deleteFAQ(id)
           .then(() => this.refreshFAQs());
  }


  searchFAQs() {
   const titleInput = document.getElementById('titleInput');
   const questionInput = document.getElementById('questionInput');
   var title = titleInput.value
   var question = questionInput.value
   debugger;
   if(title === "" && question === "") {
       this.faqService
         .findAllFAQs()
         .then(results =>
             this.setState(prevState => ({
                 faqs: results,
                 searchButtonDisabled: false
             }))
         )
         return;
   }
   this.faqService
       .filterFAQs({title: title, question: question})
       .then(results =>
           this.setState(prevState => ({
               faqs: results,
               searchButtonDisabled: !prevState.searchButtonDisabled
           }))
       )
 }
 clearSearch() {
   const titleInput = document.getElementById('titleInput');
   const questionInput = document.getElementById('questionInput');
   titleInput.value = ""
   questionInput.value = ""
   this.faqService
       .findAllFAQs()
       .then(results =>
           this.setState(prevState => ({
               faqs: results,
               searchButtonDisabled: false
           }))
       )
 }

  render() {
    let result = (
      <div>
        <FAQTable faqs={this.state.faqs} deleteFn={this.deleteFAQ}/>
        <FAQSearch
            disabled={this.state.searchButtonDisabled}
            searchFn={this.searchFAQs}
            clearFn={this.clearSearch}
        />
      </div>
      )
    return result;
  }
}

export default FAQContainer;
