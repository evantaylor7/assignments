import React from 'react'

function Comment(props){
    const {comment, _id} = props
    console.log(comment)
    return(
        <div>
            <p>{comment}</p>
        </div>
    )
}

export default Comment