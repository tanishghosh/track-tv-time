import { useState, useEffect } from "react";
import React from "react";
import Searchbar from "../searchbar/Searchbar";

export default function Home(){

    // TODO: to find the correct hook (to call the API whenever a new character is added/deleted in the search bar)
    // TODO: create a separate search bar component. introduce an input field to keep the search dynamic
    // TODO: pass the value here to perform the search


    return (
        <div>
            <h1>Home</h1>
            <Searchbar/>
        </div>
    );
}