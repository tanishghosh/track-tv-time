import React from "react";
import { useState, useEffect } from "react";
import constants from '../constants.json'

export default function Searchbar() {

    let [searchterm, setSearchTerm] = useState("");
    let [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (searchterm === '')
            setSearchResults([])
        else {
            fetch('https://api.themoviedb.org/3/search/tv?query=' + searchterm + '&api_key=' + constants["api-key"])
                .then(response => response.json())
                .then(json => {
                    setSearchResults(json["results"])
                });
        }
    }, [searchterm])

    return (
        <div>
            <h2>{searchterm}</h2>
            <div>
                <input type="text" name="search-bar" id="search-bar" onInput={setSearchTermOnInput} />
                <div style={{ borderColor: 'black' }}>
                    {
                        searchResults.length > 0 && searchResults.map((searchResult, i) => {
                            return (<div style={{ backgroundColor: 'gray', borderColor: 'black' }}><h3>{searchResult.original_name}</h3></div>)
                        })
                    }
                </div>
            </div>
        </div>
    )

    function setSearchTermOnInput() {
        let x = document.getElementById("search-bar").value;
        setSearchTerm(x)
    }

}

