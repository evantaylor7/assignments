import React, {useContext, useEffect} from 'react'
import IssueList from './IssueList.js'
import {UserContext} from '../context/UserProvider.js' 

function Public(){
    const{
        issues,
        getAllIssues
    } = useContext(UserContext)

    useEffect(() => getAllIssues(), [])

    return(
        <div>
            <h1>All of our issues</h1>
            <IssueList issues={issues}/>
        </div>
    )
}

export default Public