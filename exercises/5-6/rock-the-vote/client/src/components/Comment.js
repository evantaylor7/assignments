import React from 'react'

function Comment(props){
    const {comment, user, key} = props
    console.log(user)
    return(
        <div _id={key}>
            <h3>@{user}</h3>
            <p>{comment}</p>
        </div>
    )
}

export default Comment