import React from 'react';
import Services from '../components/views/Services';
import ServicesContainer from '../components/containers/ServicesContainer';
import renderer from 'react-test-renderer';
import ServiceService from '../services/ServiceService'
const serviceService = ServiceService.getInstance()
import '../mock/services/mockServicesService'

test('service list renders correctly', () => {
    const testRenderer = renderer.create(
            <ServicesContainer
                service={serviceService}/>)

        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()
})

test('find all services', () => {
    return serviceService.findAllServices()
        .then(services => {
            expect(services).toBeDefined()
            expect(services).toHaveLength(4)
            expect(services[0].id).toBe(101)
        })
})
