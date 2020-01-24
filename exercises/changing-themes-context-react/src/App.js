import React from "react"
import {ThemeConsumer} from "./ThemeProvider"

function App(){
    return(
        <div>
            <ThemeConsumer>
                {({theme, themeChange}) => {
                    return (
                        <>
                            <div className={theme}>
                                <h1 className="header">Welcome to the Magnificent Theme Changer!</h1>
                            </div>
                            <div className={theme}>
                                <button className="button" onClick={themeChange}>Change Themes!</button>
                            </div>
                        </>
                    )
                }}
            </ThemeConsumer>
        </div>
    )
}

export default App