 import {React, useState} from "react";
 import AppHeader from "../app-header";
 import SearchPanel from "../search-panel";
 import DataGrid from "../data-grid";
 import prizes from '../../data/prizes';

 import './app.css';
 

 function App () {


    const adaptData = (data) => {
        const result = [];
    
        data.forEach((prize) => {
            const {year, category, laureates} = prize;
            if (laureates) {
                laureates.forEach((laureat) => {
                    const {firstname, surname, id} = laureat;
                    const fullname = [firstname, surname].filter(Boolean).join(' ');
                    result.push({id, year, category, firstname, surname, fullname});
                })
            }
        })
    
        return result
    }

    const [prizesData, setData] = useState(adaptData(prizes));
    const [inputValue, setInputValue] = useState("");
    const [sortOrder, setOrder] = useState(false)

    let filteredCountries = adaptData(prizes).filter((item) => {
        return item.fullname.toLowerCase().includes(inputValue.toLowerCase());
    })

    const  onSortChange = () => {
        setOrder(sortOrder => !sortOrder);
    }

    const value = 'year';
    
      if(sortOrder) {
           const sortedAsc = filteredCountries.sort((a,b) =>  +a[value] - +b[value]);
           filteredCountries = sortedAsc;
      } 
      else  {
           const sortedDesc = filteredCountries.sort((a,b) =>  +b[value] - +a[value]);
           filteredCountries = sortedDesc;
      }

    const onSearchChange = (e) => {
        setInputValue(e.target.value);
      };

    return (
        <div className="table__wrapper">
            <SearchPanel 
            onSearchChange={onSearchChange}
            inputValue={inputValue}
            />
            <AppHeader
            onSortChange={onSortChange}
            />
            <DataGrid 
            prizesData={filteredCountries}
            />
        </div>
    )
};

export default App;