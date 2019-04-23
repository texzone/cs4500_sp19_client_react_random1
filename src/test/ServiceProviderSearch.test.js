import React from 'react'
import renderer from 'react-test-renderer'
import mockService from "../mock/data/service.dto.mock";
import ServicesProviderSearch from "../components/serviceProviderSearch/ServiceProviderSearch"
import {shallow} from 'enzyme';

test('service provider search renders correctly search fields', () => {
    const testRenderer = renderer.create(
        <ServicesProviderSearch match={{params: {id: 1482}}}/>);

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;

    const twoRowContainers = testInstance.findAllByProps({className: 'row'});
    const twoInputs = testInstance.findAllByProps({className: 'form-control'});

    expect(twoRowContainers.length).toBe(2);
    expect(twoInputs.length).toBe(2);
});

describe('ServiceProviderSearch', () => {
    it('test load providers', () => {
        const component = shallow(<ServicesProviderSearch match={{ params: { id: 1482 }}}/>);
        component.instance().setState({
            service: mockService
        });

        const providers = component.instance().generateProviders();
        component.instance().componentDidMount();

        expect(providers.length).toBe(3);
        expect(component.instance().state.service).toBeTruthy();
    })
});

// DOM Testing
describe('ServiceProviderSearch', () => {
    it('test load filters', () => {
        const testRenderer = renderer.create(<ServicesProviderSearch match={{ params: { id: 1482 }}}/>);

        const testInstance = testRenderer.root;

        const filterColumn = testInstance.findByProps({className: 'col-3'});
        expect(filterColumn.children).toEqual([]);

        testRenderer.getInstance().setState({
            service: mockService
        });
        expect(filterColumn.children.length).toBe(3);
    })
});
