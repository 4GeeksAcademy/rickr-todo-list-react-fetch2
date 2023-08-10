//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from 'react';

// include your styles into the webpack bundle
import "../styles/index.css";
import '../styles/todo.css';

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(
    <StrictMode>
        <Home />
    </StrictMode>, 
    document.querySelector("#app")
);
