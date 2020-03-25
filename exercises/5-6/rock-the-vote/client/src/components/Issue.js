import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../context/UserProvider'
import CommentForm from './CommentForm.js'
import CommentList from './CommentList.js'

function Issue(props){
    const {title, description, votes, _id} = props
    const {user, issues, upvoteIssue, downvoteIssue, addComment, getComments, deleteIssue, comments, sortList} = useContext(UserContext)
    const [toggle, setToggle] = useState(false)

    console.log(user)

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
            {/* { */}
                {/* issue.user === user._id && */}
                <button onClick={() => deleteIssue(_id)}>Delete Issue</button>
            {/* // } */}
            <p>{description}</p>
            <button onClick={() => 
                upvoteIssue(_id)
                // sortList()
            }>
                Upvote
            </button>
            <button onClick={() => 
                downvoteIssue(_id)
                // sortList()
            }>
                Downvote
            </button>
            <span>Votes: {votes}</span>
            {/* <CommentForm _id={_id} addComment={addComment}/>
            <button onClick={() => handleClick()}>
                {toggle ? 'Hide Comments' : 'Show Comments'}
            </button>
            {toggle && 
                <CommentList comments={comments}/>
            } */}
            <Link to={`/issues/detail/${_id}`}>See Comments</Link>
        </div>
    )
}

export default Issue