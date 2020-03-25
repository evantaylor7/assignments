import React from 'react'

function Comment(props){
    const {comment, key} = props
    console.log(props)
    return(
        <div _id={key}>
            <p>{comment}</p>
        </div>
    )
}

export default Comment