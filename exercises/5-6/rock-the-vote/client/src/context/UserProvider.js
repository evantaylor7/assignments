import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        issues: [],
        issueDetail: {},
        comments: [],
        errMsg: ''
    }
    
    const [userState, setUserState] = useState(initState)

    // useEffect(() => sortList(), [])

    // USERS:
    function signup(credentials){
        axios.post('/auth/signup', credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post('/auth/login', credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: '',
            issues: [],
            comments: []
        })
    }

    function handleAuthError(errMsg){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }

    function resetAuthError(){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ''
        }))
    }

    // ISSUES:
    // function sortList(){
    //     setUserState(prevUserState => {
    //         return(
    //             {...prevUserState,
    //             issues: prevUserState.issues.sort((a, b) => a.votes < b.votes)}
    //         )
    //     })
    // }

    function addIssue(id, newIssue){
        userAxios.post('/api/issues/post', newIssue)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues: [...prevUserState.issues, res.data]
                }))
            })
            .catch(err => console.log(err))
    }

    function getUserIssues(){
        userAxios.get('/api/issues/user')
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getOneIssue(issueId){
        userAxios.get(`/api/issues/${issueId}`)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issueDetail: res.data
                }))
            })
            .catch(err => console.log(err))
    }
    
    function getAllIssues(){
        axios.get('/issues')
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues: res.data
                }))
            })
            .catch(err => console.log(err))
    }

    function editIssue(issueId, updatedIssue){
        userAxios.put(`/api/issues/${issueId}`, updatedIssue)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues: prevUserState.issues.map(issue => (
                        issue._id === issueId ? res.data : issue
                    ))
                }))
            })
            .catch(err => console.log(err))
    }

    function upvoteIssue(issueId){
        userAxios.put(`/api/issues/upvote/${issueId}`)
            .then(res => {
                setUserState(prevUserState => ({
                        ...prevUserState,
                        issues: prevUserState.issues.map(issue => (
                            issue._id === issueId ? res.data : issue))
                }))
            })
            .catch(err => console.log(err))
    }

    function downvoteIssue(issueId){
        userAxios.put(`/api/issues/downvote/${issueId}`)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues: prevUserState.issues.map(issue => (
                        issue._id === issueId ? res.data : issue))
                    }))
            })
                .catch(err => console.log(err))
    }

    function deleteIssue(issueId){
        userAxios.delete(`/api/issues/${issueId}`)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues: prevUserState.issues.filter(issue => issue._id !== issueId)
                }))
            })
            .catch(err => console.log(err))
    }

    // COMMENTS:
    function getComments(_id){
        userAxios.get(`/api/comments/${_id}`)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    comments: [...res.data.reverse()]
                }))
            })
            .catch(err => console.log(err))
    }
    
    // console.log(userState.comments)
    function addComment(issueId, comment){
        userAxios.post(`/api/comments/post/${issueId}`, comment)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    comments: [...prevUserState.comments, res.data]
                }))
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <UserContext.Provider
                value={{
                    ...userState,
                    signup,
                    login,
                    logout,
                    addIssue,
                    getUserIssues,
                    getOneIssue,
                    editIssue,
                    getAllIssues,
                    upvoteIssue,
                    downvoteIssue,
                    deleteIssue,
                    resetAuthError,
                    getComments,
                    addComment
                    // sortList
                }}
            >
                {props.children}
            </UserContext.Provider>
        </div>
    )
}