import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../context/UserProvider'

function Issue(props){
    const {title, description, votes, postedBy, voteErr, _id} = props
    const {upvoteIssue, downvoteIssue} = useContext(UserContext)

    return(
        <div>
            <Link to={`/issues/detail/${_id}`}><h2>{title}</h2></Link>
            <h3>Posted by: @{postedBy}</h3>
            <p>{description}</p>
            <button onClick={() => upvoteIssue(_id)}>Upvote</button>
            <button onClick={() => downvoteIssue(_id)}>Downvote</button>
            <span>Votes: {votes}</span>
            <Link to={`/issues/detail/${_id}`}>Comments</Link>
            {voteErr.issueId === _id && 
                <p style={{color: 'red'}}>{voteErr.msg}</p>}
        </div>
    )
}

export default Issue