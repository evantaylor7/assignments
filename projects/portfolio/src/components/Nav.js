import React from 'react'
import {Link} from 'react-scroll'
import resumePDF from "./resume.pdf"

function Nav(){
    return(
        <div className="navbar-container">
            <ul className="navbar">
                <Link className="nav-link" to='page1' smooth={true}>Home</Link>
                <Link className="nav-link" to='page2' smooth={true}>Skills</Link>
                <Link className="nav-link" to='page3' smooth={true}>Projects</Link>
                <a className="nav-link" href={resumePDF} target='_blank'>Resume</a>
            </ul>
        </div>
    )
}

export default Nav