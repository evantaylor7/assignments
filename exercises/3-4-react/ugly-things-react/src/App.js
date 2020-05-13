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
                            (uglyItem, i) => 
                                <UglyCard 
                                    {...uglyItem} 
                                    handleSubmit={props.handleSubmit} 
                                    handleChange={props.handleChange} 
                                    handleDelete={props.handleDelete} 
                                    handleEdit={props.handleEdit} 
                                    key={i}
                                />
                        )}
                    </>
                )}
            </Consumer>
        </>
    )
}

export default App