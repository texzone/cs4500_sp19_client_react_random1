import React from 'react';
import FAQPagination from '../components/views/FAQPagination';
import {shallow} from 'enzyme';


describe('The FAQSearch component', () => {
    let props;
    let wrapper;
    beforeEach(() => {
        props = {
            previousFn: jest.fn(() => 'previousPage'),
            nextFn: jest.fn(() => 'nextPage'),
            changeItemsPerPageFn: jest.fn(() => 'onChangeItemsPerPage'),
            createButtonsFn: jest.fn(() => 'createPageButtons')
        };
        wrapper = shallow(<FAQPagination {...props} />);

    });
    it('the component should have Previous page button', () => {
            const previousButton = wrapper.find('button.previousButton').text();
            expect(previousButton).toEqual("Previous");
        }
    )
    it('the component should have Next page button', () => {
            const nextButton = wrapper.find('button.nextButton').text();
            expect(nextButton).toEqual("Next");
        }
    )
    /*it('the component should have at least 1 page button', () => {
            const oneButton = wrapper.find('button.Button1').text();
            expect(oneButton).toEqual("1");
        }
    )*/
    it('execute next page function when next button clicked', () => {
            const nextButton = wrapper.find('button.nextButton');
            nextButton.simulate('click');
            expect(props.nextFn).toHaveBeenCalled();
        }
    )
    it('execute next page function when next button clicked', () => {
            const previousButton = wrapper.find('button.previousButton');
            previousButton.simulate('click');
            expect(props.previousFn).toHaveBeenCalled();
        }
    )
    /*it('execute change items per page function when drop down menu item is selected', () => {
            const dropdownSelect = wrapper.find('select.dropdownSelect');
            dropdownSelect.simulate('change');
            expect(props.changeItemsPerPageFn).toHaveBeenCalled();
        }
    )*/
})
