import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles.css"

// don't need to say "localhost"
// axios.get("/movies")

// request to third party API:
// axios.get("http://rickandmortyapi.com")

ReactDOM.render(<App />, document.getElementById("root"))