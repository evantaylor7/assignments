import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import IssueForm from './IssueForm.js'
import {UserContext} from '../context/UserProvider.js'
import CommentForm from './CommentForm.js'
import CommentList from './CommentList.js'

function IssueDetail(){
    const {issueId} = useParams()
    const {
        issueDetail,
        getOneIssue,
        editIssue,
        deleteIssue, 
        addComment, 
        getComments
    } = useContext(UserContext)
    const {title, description, votes, _id} = issueDetail

    useEffect(() => {
        getComments(issueId)
        getOneIssue(issueId)}, [])

    function handleToggle(){
        setToggle(prevToggle => !prevToggle)
    }

    // function submitEdits(issueId, inputs){
    //     editIssue(issueId, inputs)
    //     handleToggle()
    // }

    const [toggle, setToggle] = useState(false)

    return(
        <div>
            <br/>
            <button onClick={handleToggle}>{toggle ? 'Cancel' : 'Edit Issue'}</button>
            <button onClick={() => deleteIssue(issueId)}>Delete Issue</button>
            {toggle ?
                <>
                    <IssueForm 
                        addOrEdit={editIssue}
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
                    <CommentForm addComment={addComment} _id={_id}/>
                    <CommentList/>
                </>
            }
        </div>
    )
}

export default IssueDetail