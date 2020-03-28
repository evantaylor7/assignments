import React, {useContext, useEffect} from 'react'
import IssueForm from './IssueForm.js'
import IssueList from './IssueList.js'
import {UserContext} from '../context/UserProvider'

function Profile(){
    const{
        user: {username},
        issues,
        addIssue,
        getUserIssues
    } = useContext(UserContext)

    useEffect(() => getUserIssues(), [])
    // this (was) creating an infinite loop

    return(
        <div>
            <h2>Welcome @{username}</h2>
            <h3>Post an issue:</h3>
            <IssueForm addOrEdit={addIssue} buttonText='Post Issue'/>
            <h3>Your issues:</h3>
            <IssueList issues={issues}/>
        </div>
    )
}

export default Profile