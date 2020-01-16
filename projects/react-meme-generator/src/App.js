import React from "react"
import Header from "./components/Header"
import MemeGenerator from "./components/MemeGenerator"

function App(){
    return(
        <div className="container">
            <Header />
            <MemeGenerator />
        </div>
    )
}

export default App