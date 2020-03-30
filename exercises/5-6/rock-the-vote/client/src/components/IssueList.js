import React from 'react'
import Issue from './Issue.js'

function IssueList(props){
    const {issues, user} = props

    return(
        <div>
            {issues.map(issue => <Issue {...issue} user={user} key={issue._id}/>)}
        </div>
    )
}

export default IssueList