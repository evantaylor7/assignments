import React from "react"
import {ThemeConsumer} from "../ThemeProvider"

function Footer(){
    return(
        <ThemeConsumer>
            {({theme}) => {
                return(
                    <h1 className={`footer ${theme}`}>Awesome footer</h1>
                )
            }}
        </ThemeConsumer>
    )
}

export default Footer