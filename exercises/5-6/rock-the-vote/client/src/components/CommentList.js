import React, {useEffect, useContext} from 'react'
import Comment from './Comment.js'
import {UserContext} from '../context/UserProvider.js'

function CommentList(props){
    // const {_id} = props
    const {getComments, comments} = useContext(UserContext)
    // useEffect(() => getComments(_id))
    return(
        <div>
            {comments.map(comment => <Comment {...comment} key={comment._id}/>)}
        </div>
    )
}

export default CommentList