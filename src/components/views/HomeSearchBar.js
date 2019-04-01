import React from 'react'

const HomeSearchBar = (props) =>
    <div className="input-group input-group-lg">
        <input
            id="provider_input"
            placeholder="Search for providers"
            type="text"
            className="form-control"/>
        <input
            id="zip_code_input"
            placeholder="Zip code"
            type="text"
            className="form-control"/>
        <div className="input-group-append">
            <button
                onClick={ () => props.searchFn() }
                className="btn btn-primary"
                type="button">
                Search
            </button>
        </div>
    </div>

export default HomeSearchBar
