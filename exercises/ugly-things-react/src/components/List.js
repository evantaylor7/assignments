import React from "react"

function List(props){
    const {title, url, description} = props
    return(
        <div className="uglyCard">
            <h1>{title}</h1>
            <img src={`${url}`}/>
            <p>{description}</p>
            <br/>
        </div>
    )
}

export default List