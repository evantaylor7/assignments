import React from "react"
import UglyCard from "./components/UglyCard"
import Submit from "./components/Submit"
import {Consumer} from "./ListContext"

function App(){
    return(
        <>
            <Submit />
            <Consumer>
                {(props) => (
                    <>
                        {props.savedCards.map(
                            (uglyItem, i) => <UglyCard {...uglyItem} {...props} key={i}/>
                        )}
                    </>
                )}
            </Consumer>
        </>
    )
}

export default App