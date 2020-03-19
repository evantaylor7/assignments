import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(props){
    const {logout, getUserIssues, getAllIssues} = props

    return(
        <div>
            <Link to='/posts' onClick={getAllIssues}>Posts</Link>
            <Link to='/profile' onClick={getUserIssues}>Profile</Link>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default NavBar