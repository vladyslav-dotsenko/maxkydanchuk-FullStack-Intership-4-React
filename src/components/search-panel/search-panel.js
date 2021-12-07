import React from 'react';

import './search-panel.css';

const SearchPanel = ({onSearchChange, inputValue}) => {

    return (
        <div className="table__header_search">
            <input type="search"  
            placeholder="Search"
            value={inputValue}
            onChange={onSearchChange}
            ></input>
        </div>
    )
};

export default SearchPanel;