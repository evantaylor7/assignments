import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import {APIContextProvider} from "./APIContext"

import App from "./App"
import "./style.css"

ReactDOM.render(
    <APIContextProvider>
        <Router>
            <App />
        </Router>
    </APIContextProvider>,
    document.getElementById("root")
)