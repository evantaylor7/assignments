import React from 'react'
import {Link} from 'react-scroll'
import resumePDF from "./resume.pdf"

function Nav(){
    return(
        <div className="navbar-container">
            <ul className="navbar">
                <li className="nav-item active">
                    <Link className="nav-link" to='page1' smooth={true}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='page2' smooth={true}>Skills</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='page3' smooth={true}>Projects</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={resumePDF} target='_blank'>Resume</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='' smooth={true}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav