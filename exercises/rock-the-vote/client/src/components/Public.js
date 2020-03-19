import React, {useContext} from 'react'
import IssueList from './IssueList.js'
import {UserContext} from '../context/UserProvider.js' 

function Public(){
    const{
        user: {username},
        issues,
        getAllIssues
    } = useContext(UserContext)

    getAllIssues()

    return(
        <div>
            <h1>All of our issues</h1>
            <IssueList issues={issues} user={username}/>
        </div>
    )
}

export default Public