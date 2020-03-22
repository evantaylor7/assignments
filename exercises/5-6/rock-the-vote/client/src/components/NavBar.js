import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(props){
    const {logout} = props

    return(
        <div>
            <Link to='/posts'>Posts</Link>
            <Link to='/profile'>Profile</Link>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default NavBar