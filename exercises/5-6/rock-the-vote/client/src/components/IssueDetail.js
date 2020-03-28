import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {UserContext} from '../context/UserProvider.js'
import IssueForm from './IssueForm.js'
import CommentForm from './CommentForm.js'
import CommentList from './CommentList.js'

function IssueDetail(){
    const {issueId} = useParams()
    const {
        user: {
            username
        },
        issueDetail,
        getOneIssue,
        editIssue,
        deleteIssue, 
        addComment, 
        getComments,
        issues
    } = useContext(UserContext)
    const {title, description, votes, _id} = issueDetail

    useEffect(() => {
        getComments(issueId)
        getOneIssue(issueId)}, [issues])

    function handleToggle(){
        setToggle(prevToggle => !prevToggle)
    }

    function submitEdits(issueId, inputs){
        editIssue(issueId, inputs)
        handleToggle()
    }

    const [toggle, setToggle] = useState(false)

    return(
        <div>
            <br/>
            <button onClick={handleToggle}>{toggle ? 'Cancel' : 'Edit Issue'}</button>
            <button onClick={() => deleteIssue(issueId)}>Delete Issue</button>
            {toggle ?
                <>
                    <IssueForm 
                        addOrEdit={submitEdits}
                        buttonText='Save'
                        title={title}
                        description={description}
                        issueId={issueId}
                        onClick={handleToggle}
                    />
                </>
                :
                <>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <span>Votes: {votes}</span>
                    <CommentForm addComment={addComment} issueId={issueId} user={username}/>
                    <CommentList issueId={issueId}/>
                </>
            }
        </div>
    )
}

export default IssueDetail