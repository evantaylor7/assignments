import React from "react"
import {Link} from "react-router-dom"


function SavedPagesNav(){
    return(
        <div>
            <Link to="/saved/read">Read</Link>
            <Link to="/saved/unread">Want to Read</Link>
        </div>
    )
}

export default SavedPagesNav