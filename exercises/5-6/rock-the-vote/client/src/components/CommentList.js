import React, {useEffect, useContext} from 'react'
import Comment from './Comment.js'
import {UserContext} from '../context/UserProvider.js'

function CommentList(props){
    const {issueId} = props
    const {getComments, comments, user: {username}} = useContext(UserContext)
    // useEffect(() => getComments(_id))
    
    return(
        <div>
            {comments.map(comment => <Comment {...comment} user={username} issueId={issueId}/>)}
        </div>
    )
}

export default CommentList