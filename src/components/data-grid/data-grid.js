import React from "react";
import DataGridItem from "../data-grid-item";

import './data-grid.css';

const DataGrid = ({prizesData}) => {
        const elements =  prizesData.map((item) => {
            const {id, ...itemProps} = item;
                   return (
                    <div key={id} className="table__row">
                        <DataGridItem
                        {...itemProps}
                        />
                    </div>
                   )
        })
        return (
            <div className="table__row_wrapper">{elements}</div>
        )
}
     

export default DataGrid;