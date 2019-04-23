import React from 'react'
import ServiceCategoryService from '../../services/ServiceCategoryService'

class ServiceCategoryPills extends React.Component {
    constructor(props) {
        super(props)
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.state = {
            serviceCategories: []
        }
    }

    componentDidMount() {
        this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories =>
                      this.setState({
                                        serviceCategories: serviceCategories
                                    })
            )
    }

    render() {
        return (
            <div>
                <ul className="nav nav-pills nav-fill wd-shadow wd-padding-20">
                    {this.state.serviceCategories
                        .map(serviceCategory =>
                                 <li className="nav-item"  key={serviceCategory.id}>
                                     <a className="nav-link btn-lg text-center"
                                        href={"/services#"+ serviceCategory.id}>
                                         <i className="fa fa-home"/>
                                         <br/>
                                         {serviceCategory.title}
                                     </a>
                                 </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default ServiceCategoryPills
