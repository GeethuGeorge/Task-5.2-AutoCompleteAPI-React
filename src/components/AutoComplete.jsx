import React, { useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

library.add(faMagnifyingGlass); // Add the icons you want to use

export const AutoComplete = () => {
    const[names,setNames]=useState([])

    useEffect(() => {
     
        const fetchData=async()=>{
            const response=await fetch("https://jsonplaceholder.typicode.com/users")
            const data=await response.json();
             setNames(data)         
        }
       fetchData()
    }, [])


    const [searchResult, setSearchResult] = useState([]);

    const searchHandler = (event) => {
        const value = event.target.value;
        const matchedNames = names.filter((item) => item.name.toLowerCase().startsWith(value.toLowerCase()));
        setSearchResult(matchedNames);
    };
    console.log(searchResult)

    return (
        <div className="autocomplete">
            <h2>Search the person</h2>
            <input type="text" className="searchInput" onChange={searchHandler} />
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
            <ul>
                {searchResult.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};
