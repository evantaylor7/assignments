import React from "react"
import {Switch, Route} from "react-router-dom"

import Browse from "./components/pages/Browse"
import Home from "./components/pages/Home"
import Read from "./components/pages/savedPages/Read"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BookDetail from "./components/pages/BookDetail"

function App(){
    return(
        <div className="pageContainer">
            <Navbar />
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/browse"><Browse /></Route>
                <Route path="/:bookId"><BookDetail /></Route>
                <Route path="/saved"><Read /></Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App