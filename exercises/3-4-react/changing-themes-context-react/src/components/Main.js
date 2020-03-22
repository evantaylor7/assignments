import React from "react"
import {ThemeConsumer} from "../ThemeProvider"

function Main(){
    return(
        <ThemeConsumer>
            {({theme, themeChange}) => {
                return (
                    <>
                        <div className={`main ${theme}`}>
                            <h1 className="header">Welcome to the Magnificent Theme Changer!</h1>
                        </div>
                        <div className={`buttonContainer ${theme}`}>
                            <button className={`button-${theme}`} onClick={themeChange}>Change Themes!</button>
                        </div>
                    </>
                )
            }}
        </ThemeConsumer>
    )
}

export default Main