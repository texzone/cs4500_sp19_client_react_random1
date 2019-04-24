import React from 'react'

const ServiceCards = ({services}) =>
    <div className="row">
        {
            services.map(service =>
                <div key={service.id}
                     className="card no-border col-6">
                    <img src={"https://bit.ly/2GCjMOv"}
                         className="card-img-top"/>
                    <div className="card-body">
                        <p className="card-text">
                            <a href={`provider-search/${service.id}`}> {service.serviceName}</a>
                        </p>
                    </div>
                </div>
            )
        }
    </div>

export default ServiceCards