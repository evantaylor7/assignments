import React, {useContext} from 'react'
import PostForm from './IssueForm.js'
import PostList from './IssueList.js'
import {UserContext} from '../context/UserProvider'

function Profile(){
    const{
        user: {username},
        addIssue,
        issues
    } = useContext(UserContext)

    console.log(issues)

    return(
        <div>
            <h2>Welcome @{username}</h2>
            <h3>Post an issue:</h3>
            <PostForm addIssue={addIssue}/>
            <h3>Your issues:</h3>
            <PostList issues={issues}/>
        </div>
    )
}

export default Profile