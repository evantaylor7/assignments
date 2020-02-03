import React from "react"
import List from "./components/List"
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
                            (uglyItem, i) => <List {...uglyItem} handleDelete={props.handleDelete} key={i}/>
                        )}
                    </>
                )}
            </Consumer>
        </>
    )
}

export default App