import React from "react"

function Pet(props){
    return(
        <div>
            <p>name: {props.name}</p>
            <p>breed: {props.breed}</p>
            <br/>
        </div>
    )
}

export default Pet