import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <Link to='/posts'>Posts</Link>
            <Link to='/profile'>Profile</Link>
        </div>
    )
}

export default NavBar