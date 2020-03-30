import React, {useContext} from 'react'
import Comment from './Comment.js'
import {UserContext} from '../context/UserProvider.js'

function CommentList(props){
    const {issueId} = props
    const {comments, user: {username}} = useContext(UserContext)
    
    return(
        <div>
            {comments.map(comment => <Comment {...comment} user={username} issueId={issueId}/>)}
        </div>
    )
}

export default CommentList