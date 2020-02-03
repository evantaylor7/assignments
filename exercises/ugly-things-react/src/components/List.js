import React from "react"

function List(props){
    const {title, url, description, handleDelete, _id} = props
    return(
        <div className="uglyCard">
            <h1>{title}</h1>
            <img src={`${url}`}/>
            <p>{description}</p>
            <br/>
            <button>Edit</button>
            <button onClick={() => handleDelete(_id)}>Delete</button>
            
        </div>
    )
}

export default List