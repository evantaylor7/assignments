import React from "react"
import Navbar from "./Navbar"

function Header(){

    return(
        <div className="header">
            <Navbar />
            <div>
                <h1 className="title">Clean Blog</h1>
                <p className="subTitle">A Blog Theme by Start Bootstrap</p>
            </div>
        </div>
    )
}

export default Header