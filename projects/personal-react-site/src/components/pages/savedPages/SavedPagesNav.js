import React from "react"
import {Link} from "react-router-dom"
import {withRouter} from 'react-router-dom'

function SavedPagesNav(props){
    return(
        <div className="saved-nav">
            <h2>My pages:</h2>
            <Link className={props.location.pathname === "/saved/read" ? "saved-selected" : "saved-link"} to="/saved/read">Read</Link>
            <br/><br/>
            <Link className={props.location.pathname === "/saved/unread" ? "saved-selected" : "saved-link"} to="/saved/unread">Want to Read</Link>
        </div>
    )
}

export default withRouter(SavedPagesNav)