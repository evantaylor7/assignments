import React, {useContext, useState} from 'react'
import {UserContext} from '../context/UserProvider'
import CommentForm from './CommentForm.js'
import CommentList from './CommentList.js'

function Issue(props){
    const {title, description, votes, _id} = props
    const {upvoteIssue, downvoteIssue, addComment, getComments, comments, sortList} = useContext(UserContext)
    const [toggle, setToggle] = useState(false)

    function toggleComments(){
        setToggle(prevToggle => !prevToggle)
    }

    function handleClick(){
        getComments(_id)
        toggleComments()
    }

    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => 
                upvoteIssue(_id),
                sortList()}
            >
                Upvote
            </button>
            <button onClick={() => 
                downvoteIssue(_id),
                sortList()}
            >
                Downvote
            </button>
            <span>Votes: {votes}</span>
            <CommentForm _id={_id} addComment={addComment}/>
            <button onClick={() => handleClick()}>
                {toggle ? 'Hide Comments' : 'Show Comments'}
            </button>
            {toggle && 
                <CommentList comments={comments}/>
            }
        </div>
    )
}

export default Issue