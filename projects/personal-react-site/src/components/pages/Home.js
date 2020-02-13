import React from "react"
import {Link} from "react-router-dom"

function Home(){
    return(
        <div className="content title-page">
            <h1><i>welcome to</i></h1>
            <h1 className="title">BookMark</h1>
            <h1>Discover books relevant to you.</h1>
            <h1>Save books you want to read.</h1>
            <h1>Mark as "read" and watch your list grow.</h1><br/>
            <div>
                <Link to="/browse"><button className="start-button">Start here</button></Link>
            </div>
        </div>
    )
}

export default Home