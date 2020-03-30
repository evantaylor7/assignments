import React from 'react'

function Comment(props){
    const {comment, user} = props

    return(
        <div key={comment._id}>
            <h3>@{user}</h3>
            <p>{comment}</p>
        </div>
    )
}

export default Comment