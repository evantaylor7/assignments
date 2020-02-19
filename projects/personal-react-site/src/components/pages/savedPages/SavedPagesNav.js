import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {withRouter} from 'react-router-dom'
import {APIContext} from "../../../APIContext"

function SavedPagesNav(props){
    const {theme} = useContext(APIContext)
    return(
        <div className={`${theme}-search-form saved-nav`}>
            <h2>My lists:</h2><br/>
            <Link className={props.location.pathname === "/saved/unread" ? "saved-selected" : `${theme}-saved-link saved-link`} to="/saved/unread">Want to Read</Link>
            <br/><br/>
            <Link className={props.location.pathname === "/saved/read" ? "saved-selected" : `${theme}-saved-link saved-link`} to="/saved/read">Read</Link>
        </div>
    )
}

export default withRouter(SavedPagesNav)