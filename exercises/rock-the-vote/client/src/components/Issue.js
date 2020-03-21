import React, {useContext} from 'react'
import {UserContext} from '../context/UserProvider'
import CommentForm from './CommentForm.js'

function Issue(props){
    const {title, description, votes, _id} = props
    const {upvoteIssue, downvoteIssue, addComment} = useContext(UserContext)

    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => upvoteIssue(_id)}>Upvote</button>
            <button onClick={() => downvoteIssue(_id)}>Downvote</button>
            <span>Votes: {votes}</span>
            <CommentForm _id={_id} addComment={addComment}/>
        </div>
    )
}

export default Issue