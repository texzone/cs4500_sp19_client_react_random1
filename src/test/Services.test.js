import React from 'react';
import Services from '../components/views/Services';
import ServicesContainer from '../components/containers/ServicesContainer';
import renderer from 'react-test-renderer';
import ServiceService from '../services/ServiceService'
const servicesService = ServiceService.getInstance()
import '../mock/services/mockServicesService'

test('service list renders correctly', () => {
    const testRenderer = TestRenderer.create(
            <ServicesContainer
                service=servicesService/>)

        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()

        const testInstance = testRenderer.root
        const serviceTitles = testInstance.findAllByProps({className: 'serviceName'})

        expect(serviceTitles.length).toBe(4)
}

test('find all services', () => {
    return serviceService.findAllUsers()
        .then(services => {
            expect(services).toBeDefined()
            expect(services).toHaveLength(4)
            expect(services[0].id).toBe(101)
        })
})
