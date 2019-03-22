import React from 'react'
import FAQService from '../../services/FAQService'
import FAQSearch from '../views/FAQSearch'
import FAQTable from '../views/FAQTable'
import FAQPagination from '../views/FAQPagination'

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
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.onChangeItemsPerPage = this.onChangeItemsPerPage.bind(this)
        this.createPageButtons = this.createPageButtons.bind(this)
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

    onChangeItemsPerPage() {
        var currButtons = document.getElementById("pageButtons").innerHTML = "";
        var eID = document.getElementById("selector");
        var pageText = eID.options[eID.selectedIndex].text;

        if (pageText == "10") {
            this.setState({itemsPerPage: 10, pageNumber: 1})
        }
        if (pageText == "25") {
            this.setState({itemsPerPage: 25, pageNumber: 1})
        }
        if (pageText == "50") {
            this.setState({itemsPerPage: 50, pageNumber: 1})
        }
        if (pageText == "All") {
            this.setState({itemsPerPage: 1000000, pageNumber: 1})
        }
    }
    previousPage() {
        if (this.state.pageNumber != 1) {
            var temp = this.state.pageNumber - 1;
            this.setState({pageNumber: temp })
        }
    }
    nextPage() {
        var totalPages = Math.ceil(this.state.faqs.length / this.state.itemsPerPage);
        if (this.state.pageNumber + 1 <= totalPages) {
            var temp = this.state.pageNumber + 1;
            this.setState({pageNumber: temp })
        }
    }

    createPageButtons() {
        var totalPages = Math.ceil(this.state.faqs.length / this.state.itemsPerPage);
        var i;
        for (i = 1; i < totalPages + 1; i++) {
            if ((document.getElementById("Button " + i)) == null)
            {
                console.log(i);
                var button = document.createElement("BUTTON");
                var buttonText = document.createTextNode("" + i);
                button.appendChild(buttonText);
                button.type = "button";
                button.id = "Button " + i;
                button.value = i;
                button.onclick = function(e) {
                    this.setState({pageNumber: e.target.value})
                }.bind(this);
                document.getElementById("pageButtons").appendChild(button);
            }
        }
    }

    render() {
        let result = (
            <div>
                <FAQTable
                    faqs={this.state.faqs}
                    deleteFn={this.deleteFAQ}
                    pageNumber={this.state.pageNumber}
                    itemsPerPage={this.state.itemsPerPage}/>
                <FAQSearch
                    disabled={this.state.searchButtonDisabled}
                    searchFn={this.searchFAQs}
                    clearFn={this.clearSearch}
                />
                <FAQPagination id="Pagination"
                    previousFn={this.previousPage}
                    nextFn={this.nextPage}
                    changeItemsPerPageFn={this.onChangeItemsPerPage}
                    createButtonsFn={this.createPageButtons}/>
            </div>
        )
        return result;
    }
}

export default FAQContainer;
