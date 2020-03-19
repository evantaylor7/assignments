import React from 'react'

function Comment(props){
    const {title, description, _id} = props
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            
        </div>
    )
}

export default Comment