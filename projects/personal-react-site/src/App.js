import React from "react"
import {Switch, Route} from "react-router-dom"

import Browse from "./components/pages/Browse"
import Home from "./components/pages/Home"
import Read from "./components/pages/savedPages/Read"
import Unread from './components/pages/savedPages/Unread'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BookDetail from "./components/pages/BookDetail"

function App(){
    return(
        <div className="pageContainer">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/browse" component={Browse}/>
                <Route path="/saved/read" component={Read}/>
                <Route path="/saved/unread" component={Unread}/>
                <Route path="/:bookId" component={BookDetail} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App