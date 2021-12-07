import React from "react";
import './data-gird-item.css';

const DataGridItem = ({year, category, firstname, surname, fullname}) => {
    
    return (
        <>
            <span className="table__row_year">{year}</span>
            <span className="table__row_category">{category}</span>
            <span className="table__row_firstname">{firstname}</span>
            <span className="table__row_lastname">{surname}</span>
            <span className="table__row_fullname">{fullname}</span>
            </>
    )
}

export default DataGridItem;