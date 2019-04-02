import React from 'react'
import ServiceCategoryList from '../components/serviceNavigator/ServiceCategoryList'
import renderer from 'react-test-renderer'
const srvCatData = require('../mock/data/service_categories.mock.json')
import ServiceCategoryService from '../services/serviceCategoryService'
const serviceCategoryService = ServiceCategoryService.getInstance()
import '../mock/services/mockServiceCategoryService'

test('service category list renders correctly', () => {
    const testRenderer = renderer.create(
            <ServiceCategoryList
                serviceCategories={srvCatData}/>)

        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()

        const testInstance = testRenderer.root

        const listGrp  = testInstance.findByProps({className: 'list-group'})
        const listRows = testInstance.findAllByProps(
                {className: 'list-group-item no-border'})

        expect(listGrp).toBeDefined()
        expect(listRows.length).toBe(4)
})

test('render all from service category service', () => {
    serviceCategoryService
        .findAllServiceCategories()
        .then(categories => {
            const testRenderer = renderer.create(
                    <ServiceCategoryList
                        serviceCategories={categories}/>)
                let tree = testRenderer.toJSON()
                expect(tree).toMatchSnapshot()

                const testInstance = testRenderer.root

                const listGrp  = testInstance.findByProps({className: 'list-group'})
                const listRows = testInstance.findAllByProps(
                        {className: 'list-group-item no-border'})

                expect(listGrp).toBeDefined()
                expect(listRows.length).toBe(4)
        })
})
