import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {UserContext} from '../context/UserProvider.js'
import IssueForm from './IssueForm.js'
import CommentForm from './CommentForm.js'
import CommentList from './CommentList.js'

function IssueDetail(){
    const {issueId} = useParams()
    const {
        user: {username},
        issueDetail,
        issueDetail: {
            title,
            description,
            votes,
            postedBy,
            _id
        },
        getOneIssue,
        editIssue,
        deleteIssue, 
        addComment, 
        getComments,
        issues
    } = useContext(UserContext)
    
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
    // issueDetail && () => const {title, description, votes, _id} = issueDetail
    
    return(
        <>
            {issueDetail.title &&
                <div key={_id}>
                    <br/>
                    <button onClick={handleToggle}>{toggle ? 'Cancel' : 'Edit Issue'}</button>
                    {username === postedBy &&
                    <>
                        <button onClick={() => deleteIssue(issueId)}>Delete Issue</button>
                    </>}
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
                            <h3>Posted by: @{postedBy}</h3>
                            <p>{description}</p>
                            <span>Votes: {votes}</span>
                            <CommentForm 
                                addOrEditComment={addComment} 
                                issueOrCommentId={issueId} 
                                commentBtnText='Comment'
                            />
                            <CommentList/>
                        </>
                    }
                </div>
            }
        </>
    )
}

export default IssueDetail