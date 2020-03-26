import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import Issue from './Issue.js'
import {UserContext} from '../context/UserProvider.js'
import CommentForm from './CommentForm.js'
import CommentList from './CommentList.js'

function IssueDetail(){
    const {issueId} = useParams()
    const {
        issueDetail,
        user: {_id: userId}, 
        getOneIssue,
        upvoteIssue, 
        downvoteIssue, 
        deleteIssue, 
        addComment, 
        getComments, 
        comments
    } = useContext(UserContext)
    const {title, description, votes, _id} = issueDetail

    useEffect(() => {
        getComments(issueId)
        getOneIssue(issueId)}, [])
    // console.log(issues.filter(issue => issue._id === id))

    const [toggle, setToggle] = useState(false)
    const [edits, setEdits] = useState({
        title: '' || title,
        description: '' || description
    })

    function handleEdits(e){
        const {name, value} = e.target
        setEdits(prevEdits => ({
            ...prevEdits,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        
    }

    return(
        <div>
            <br/>
            <button onClick={() => setToggle(prevToggle => !prevToggle)}>{toggle ? 'Cancel' : 'Edit Issue'}</button>
            <button onClick={() => deleteIssue(issueId)}>Delete Issue</button>
            {toggle ?
                <>
                    <form onSubmit={handleSubmit}>
                        <label>Title: </label>
                        <input 
                            type='text' 
                            onChange={handleEdits} 
                            name='title' 
                            value={edits.title} 
                        />
                        <br/>
                        <label>Description: </label>
                        <input 
                            type='text' 
                            onChange={handleEdits} 
                            name='description' 
                            value={edits.description} 
                        />
                        <br/>
                        <button>Save</button>
                    </form>
                </>
                :
                <>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <span>Votes: {votes}</span>
                    <CommentForm addComment={addComment} _id={_id}/>
                    <CommentList/>
                </>
            }
        </div>
    )
}

export default IssueDetail