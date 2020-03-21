import React from 'react'
import Comment from './Comment.js'

function CommentList(props){
    const {comments} = props
    return(
        <div>
            {comments.map(comment => <Comment {...comment} key={comment._id}/>)}
        </div>
    )
}

export default CommentList