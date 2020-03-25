import React, {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import Issue from './Issue.js'
import {UserContext} from '../context/UserProvider.js'

function IssueDetail(){
    const {id} = useParams()
    const {issues, getUserIssues, user: {_id}, upvoteIssue, downvoteIssue, deleteIssue, comments} = useContext(UserContext)
    useEffect(() => getUserIssues(_id))
    console.log(issues.filter(issue => issue._id === id))

    return(
        <div>
            {issues.filter(issue => issue._id === id && 
            // <>
            const {title, description, votes, _id} = issue
                <h2>{title}</h2>
                // {/* { */}
                //     {/* issue.user === user._id && */}
                    <button onClick={() => deleteIssue(_id)}>Delete Issue</button>
                // {/* // } */}
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
                // {/* <CommentForm _id={_id} addComment={addComment}/>
                // <button onClick={() => handleClick()}>
                //     {toggle ? 'Hide Comments' : 'Show Comments'}
                // </button>
                // {toggle && 
                //     <CommentList comments={comments}/>
                // } */}}
            // </>
            )}
        </div>
    )
}

export default IssueDetail