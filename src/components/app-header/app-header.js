import React from "react";
import './app-header.css';

const AppHeader = ({onSortChange}) => {

    return (
        <div className="table__header">
        <span className="table__header_year"
        onClick={onSortChange}
        >Year</span>
        <span className="table__header_category"
        onClick={onSortChange}
        >Category</span>
        <span className="table__header_firstname">First name</span>
        <span className="table__header_lastname">Last name</span>
        <span className="table__header_fullname">Full name</span>
    </div>
    )
}

export default AppHeader;