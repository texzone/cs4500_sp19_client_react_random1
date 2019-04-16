import React from 'react'

const ServiceProviderNavigator = (props) =>
    <div>
        <div className="row">
            <div className="col-3 text-right">
                <a href="#">Sign up</a>
            </div>
            <div className="col-1">
                <a href="#">Log in</a>
            </div>
        </div>
        <br/>
        <table>
        <tbody>
        {
              props.location.state.serviceProviders
                .map(provider =>
                    <tr key={provider.id}>
                        <td>{provider.name}</td>
                        <td>{provider.zipCode}</td>
                    </tr>
                )
        }
        </tbody>
        </table>
        <br/>
    </div>

export default ServiceProviderNavigator
