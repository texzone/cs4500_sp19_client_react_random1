import React from 'react'
import ServiceCategorySectionList from '../components/serviceNavigator/ServiceCategorySectionList'
import renderer from 'react-test-renderer'
const srvCatData = require('../mock/data/service_categories.mock.json')
import ServiceCategoryService from '../services/serviceCategoryService'
const serviceCategoryService = ServiceCategoryService.getInstance()
import '../mock/services/mockServiceCategoryService'

test('service category section list renders correctly', () => {
    const testRenderer = renderer.create(
            <ServiceCategorySectionList
                serviceCategories={srvCatData}/>)

        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()

        const testInstance = testRenderer.root

        const allCats = testInstance.findByProps({className: 'list-group no-border'})
        const svcSecs = testInstance.findAllByProps({className: 'list-group-item no-border'})

        expect(allCats).toBeDefined()
        expect(svcSecs.length).toBe(4)
})

