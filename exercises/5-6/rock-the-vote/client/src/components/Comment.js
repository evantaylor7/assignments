import React from 'react'

function Comment(props){
    const {comment, commentId, user} = props

    return(
        <div key={commentId}>
            <h3>@{user}</h3>
            <p>{comment}</p>
        </div>
    )
}

export default Comment