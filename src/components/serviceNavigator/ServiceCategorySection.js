import React from 'react'
const ServiceCategorySection = ({serviceCategory}) =>
    <div>
        <a id={serviceCategory.id}/>
        <h2>{serviceCategory.title}</h2>
            <div>
                <div className="row">
                    {
                        serviceCategory.services.map(service =>
                                <div key={service.id}
                                    className="col-6 list-group-item no-border">
                                    <a href="#">{service.serviceName}</a>
                                </div>
                            )
                    }
                </div>
            </div>
    </div>

export default ServiceCategorySection
