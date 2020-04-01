import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

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
        issueDetail: {
            title: '',
            description: '',
            votes: 0,
            postedBy: '',
            _id: ''
        },
        comments: [],
        errMsg: '',
        voteErr: {
            msg: '',
            issueId: ''
        }
    }
    const [userState, setUserState] = useState(initState)

    const {goBack} = useHistory()

    useEffect(() => {
        sortListByVotes()
        resetVoteError()
    }, [userState.issues])

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
            comments: [],
            issueDetail: {
                title: '',
                description: '',
                votes: 0,
                postedBy: '',
                _id: ''
            },
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
        userAxios.get('api/issues/user')
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

    function deleteIssue(issueId){
        userAxios.delete(`/api/issues/${issueId}`)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues: prevUserState.issues.filter(issue => issue._id !== issueId)
                }))
                goBack()
            })
            .catch(err => console.log(err))
    }

    // VOTES:
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
            .catch(err => handleVoteError(err.response.data.errMsg, issueId))
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
                .catch(err => handleVoteError(err.response.data.errMsg, issueId))
    }

    function handleVoteError(errMsg, issueId){
        setUserState(prevUserState => ({
            ...prevUserState,
            voteErr: {
                msg: errMsg,
                issueId: issueId
            }
        }))
    }

    function resetVoteError(){
        setUserState(prevUserState => ({
            ...prevUserState,
            voteErr: {
                msg: '',
                issueId: ''
            }
        }))
    }

    function sortListByVotes(){
        setUserState(prevUserState => ({
            ...prevUserState,
            issues: prevUserState.issues.sort((a, b) => b.votes - a.votes)
        }))
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
    
    function addComment(issueId, comment){
        userAxios.post(`/api/comments/post/${issueId}`, comment)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    comments: [res.data, ...prevUserState.comments]
                }))
            })
            .catch(err => console.log(err))
    }

    function deleteComment(commentId){
        userAxios.delete(`/api/comments/${commentId}`)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    comments: prevUserState.comments.filter(comment => comment._id !== commentId)
                }))
            })
            .catch(err => console.log(err))
    }

    function editComment(commentId, updatedComment){
        userAxios.put(`/api/comments/${commentId}`, updatedComment)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    comments: prevUserState.comments.map(comment => (
                        comment._id === commentId ? res.data : comment))
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
                    resetAuthError,
                    addIssue,
                    getUserIssues,
                    getOneIssue,
                    editIssue,
                    getAllIssues,
                    upvoteIssue,
                    downvoteIssue,
                    deleteIssue,
                    getComments,
                    addComment,
                    deleteComment,
                    editComment
                }}
            >
                {props.children}
            </UserContext.Provider>
        </div>
    )
}