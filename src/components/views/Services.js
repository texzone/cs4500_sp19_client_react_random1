import React from 'react'
const Services = ({services, onChangeItemsPerPage, nextPage, previousPage, createPageButtons}) =>
    {
        let div = 
            (
                <div>
                <h3>Services</h3>
                <table className="table">
                <tr>
                <th>Title</th>
                </tr>
                <tbody>
                {
                    services.map(service =>
                            <tr key={service.id}>
                                <td>{service.serviceName}</td>
                            </tr>)
                }
                </tbody>
                <tr>
                    <th><button id="previous" onClick={previousPage}>Previous</button></th>
                    <th><div id="pageButtons"> </div></th>
                    <th><button id="next" onClick={nextPage}>Next</button></th>
                </tr>
                <tr>
                    <th>
                      <div id = "dropdown" >
                          <select id="selector" onChange={onChangeItemsPerPage}>
                              <option value="1" selected="selected">10</option>
                              <option value="2">25</option>
                              <option value="3">50</option>
                              <option value="4">100</option>
                              <option value="5">All</option></select>
                      </div>
                    </th>
                </tr>
            </table>
                </div>
            )
            createPageButtons()
            return div;
    }

export default Services
