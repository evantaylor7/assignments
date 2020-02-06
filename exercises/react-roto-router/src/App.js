import React from "react"
import {Switch, Route} from "react-router-dom"

import Home from "./components/pages/Home"
import About from "./components/pages/About"
import FAQ from "./components/pages/FAQ"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App(){
    return(
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/about"><About/></Route>
                <Route path="/faq"><FAQ/></Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App