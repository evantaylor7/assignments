import React from 'react'

function Issue(props){
    const {title, description, _id} = props
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Issue