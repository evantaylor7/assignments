import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <div className="nav">
            <Link className="navElement" to="/">Home</Link>
            <Link className="navElement" to="/browse">Browse</Link>
            <Link className="navElement" to="/saved">Saved</Link>
            <span className="navTitle">BookMark</span>
        </div>
    )
}

export default Navbar