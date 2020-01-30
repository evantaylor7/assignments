import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "./ListContext"
import App from "./App"
import "./style.css"

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById("root")
)