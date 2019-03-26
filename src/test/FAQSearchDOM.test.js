import React from 'react';
import FAQSearch from '../components/views/FAQSearch';
import {shallow} from 'enzyme';


describe('The FAQSearch component', () => {
    let props;
    let wrapper;
    beforeEach(() => {
      props = {
        disabled: false,
        searchFn: jest.fn(() => 'Search'),
        clearFn: jest.fn(() => 'clearSearch')
      };
      wrapper = shallow(<FAQSearch {...props} />);

    });
    it('the component should have Search button', () => {
        const searchButton = wrapper.find('button.searchButton').text();
        expect(searchButton).toEqual("Search");
        }
      )
    it('the component should have Clear Search button', () => {
        const searchButton = wrapper.find('button.clearSearchButton').text();
        expect(searchButton).toEqual("Clear Search");
        }
      )
    it('execute search function when search button clicked', () => {
        const searchButton = wrapper.find('button.searchButton');
        searchButton.simulate('click');
        expect(props.searchFn).toHaveBeenCalled();
        }
      )
    it('execute clear function when clear search button clicked', () => {
        const searchButton = wrapper.find('button.clearSearchButton');
        searchButton.simulate('click');
        expect(props.clearFn).toHaveBeenCalled();
        }
      )
    it('disable search button correctly', () => {
        const searchButton = wrapper.find('button.searchButton');
        const clearSearchButton = wrapper.find('button.clearSearchButton');
        expect(searchButton.props().disabled).toEqual(false);
        expect(clearSearchButton.props().disabled).toEqual(true);
        }
      )
    it('disable clear search button correctly', () => {
        wrapper.setProps({disabled:true})
        const searchButton = wrapper.find('button.searchButton');
        const clearSearchButton = wrapper.find('button.clearSearchButton');
        expect(searchButton.props().disabled).toEqual(true);
        expect(clearSearchButton.props().disabled).toEqual(false);
        }
      )
})
