import React from "react"

function Bounty(props){
    const {firstName, lastName, bountyAmount, type, _id} = props
    const living = JSON.parse(props.living)
    
    return(
        <div className="bounty">
            <h1>{firstName} {lastName}</h1>
            <h2>{type}</h2>
            <h3>Alive: {living ? "Yes" : "No"}</h3>
            <p>Bounty: ${bountyAmount}</p>
        </div>
    )
}

export default Bounty