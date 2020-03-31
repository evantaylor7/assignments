import React, {useContext} from 'react'
import Issue from './Issue.js'
import {UserContext} from '../context/UserProvider.js'

function IssueList(props){
    const {issues} = props
    const {voteErr} = useContext(UserContext)

    return(
        <div>
            {issues.map(issue => <Issue {...issue} voteErr={voteErr} key={issue._id}/>)}
        </div>
    )
}

export default IssueList