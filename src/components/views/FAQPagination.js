import React from 'react'

const FAQPagination = (props) => {
    let div = (
        <div>
            <tr>
                <th>
                    <div id = "dropdown" >
                        <select id="selector" onChange={() => props.changeItemsPerPageFn()}>
                            <option value="1" selected="selected">10</option>
                            <option value="2">25</option>
                            <option value="3">50</option>
                            <option value="4">100</option>
                            <option value="5">All</option></select>
                    </div>
                </th>
                <th><button id="previous" onClick={() => props.previousFn()}>Previous</button></th>
                <th><div id="pageButtons"> </div></th>
                <th><button id="next" onClick={() => props.nextFn()}>Next</button></th>
            </tr>
        </div>
    )
    props.createButtonsFn()
    return div;
}

export default FAQPagination;