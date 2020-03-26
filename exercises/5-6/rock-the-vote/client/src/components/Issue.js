import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../context/UserProvider'

function Issue(props){
    const {title, description, votes, _id} = props
    const {user, issues, upvoteIssue, downvoteIssue, sortList} = useContext(UserContext)

    return(
        <div>
            <Link to={`/issues/detail/${_id}`}><h2>{title}</h2></Link>
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
            <Link to={`/issues/detail/${_id}`}>Comments</Link>
        </div>
    )
}

export default Issue