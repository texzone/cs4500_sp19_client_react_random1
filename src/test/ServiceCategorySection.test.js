import React from 'react'
import ServiceCategorySection from '../components/serviceNavigator/ServiceCategorySection'
import renderer from 'react-test-renderer'
const srvCatData = require('../mock/data/service_categories.mock.json')
import ServiceCategoryService from '../services/serviceCategoryService'
const serviceCategoryService = ServiceCategoryService.getInstance()
import '../mock/services/mockServiceCategoryService'

test('service category section renders correctly many services', () => {
    const testRenderer = renderer.create(
            <ServiceCategorySection
                serviceCategory={srvCatData[1]}/>)

        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()

        const testInstance = testRenderer.root

        const rowGrp = testInstance.findByProps({className: 'row'})
        const svcGrp = testInstance.findAllByProps(
                {className: 'col-6 list-group-item no-border'})

        expect(rowGrp).toBeDefined()
        expect(svcGrp.length).toBe(4)
})

test('service category section renders correctly one service', () => {
    const testRenderer = renderer.create(
            <ServiceCategorySection
                serviceCategory={srvCatData[0]}/>)

        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()

        const testInstance = testRenderer.root

        const rowGrp = testInstance.findByProps({className: 'row'})
        const svcGrp = testInstance.findAllByProps(
                {className: 'col-6 list-group-item no-border'})

        expect(rowGrp).toBeDefined()
        expect(svcGrp.length).toBe(1)
})
