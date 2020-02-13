import React from "react"
import {Link} from "react-router-dom"
import {withRouter} from 'react-router-dom'

function Navbar(props){
    return(
        <div className="nav">
            <Link className={props.location.pathname === "/" ? "nav-selected" : "nav-element"} to="/">Home</Link>
            <Link className={props.location.pathname === "/browse" ? "nav-selected" : "nav-element"} to="/browse">Browse</Link>
            <Link className={props.location.pathname === "/saved" ? "nav-selected" : "nav-element"} to="/saved">Saved</Link>
            <Link className="nav-element nav-title" to="/">BookMark</Link>
        </div>
    )
}

export default withRouter(Navbar)