import React from "react"
import {ThemeConsumer} from "../ThemeProvider"

function Navbar(){
    return(
        <ThemeConsumer>
            {({theme}) => {
                return(
                    <ul className={`nav ${theme}`}>
                        <li className="navItem">Home</li>
                        <li className="navItem">About</li>
                        <li className="navItem">Contact</li>
                    </ul>
                )
            }}
        </ThemeConsumer>
    )
}

export default Navbar