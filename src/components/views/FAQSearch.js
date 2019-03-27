import React from 'react'

const FAQSearch = (props) => {
  return (
    <tr>
      <th>
        <div id="searchButtons">
            <button
              className = "searchButton"
              id="search"
              disabled={props.disabled}
              onClick={() => props.searchFn()}>
              Search</button>
            <button
              className = "clearSearchButton"
              id="clearSearch"
              disabled={!props.disabled}
              onClick={() => props.clearFn()}>
            Clear Search</button>
        </div>
    </th>
  </tr>
  )
}

export default FAQSearch;
