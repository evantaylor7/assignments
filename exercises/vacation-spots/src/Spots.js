import React from "react"

function Spots(props){
    return(
        <div className="card" style={{backgroundColor: props.timeToGo === "Fall" ? "rgb(233, 210, 111)" : (props.timeToGo === "Spring" ? "rgb(100, 172, 130)" : (props.timeToGo === "Winter" ? "rgb(190, 225, 233)" : (props.timeToGo === "Summer" ? "rgb(172, 117, 100)" : "white")))}}>
            <h1>{props.place}</h1>
            <h3>Costs: ${props.price}</h3>
            <h2>Best time to go: {props.timeToGo}</h2>
        </div>
    )
}

export default Spots