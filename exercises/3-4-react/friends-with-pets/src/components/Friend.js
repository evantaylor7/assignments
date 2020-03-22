import React from "react"
import Pet from "./Pet"

function Friend(props){
    const pets = props.pets.map(pet => <Pet name={pet.name} breed={pet.breed} />)
    return(
        <div className="friendCard">
            <h2>{props.name}</h2>
            <h3>age: {props.age}</h3>
            <h3>pets:</h3>
            {pets}
            <hr/>
        </div>
    )
}

export default Friend