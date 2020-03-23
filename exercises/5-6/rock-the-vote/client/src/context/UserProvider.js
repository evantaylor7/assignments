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
        comments: [],
        errMsg: ''
    }
    
    const [userState, setUserState] = useState(initState)
    console.log(userState.issues)

    // useEffect(() => sortList(), [])

    function sortList(){
        setUserState(prevUserState => {
            return(
                {...prevUserState,
                issues: prevUserState.issues.sort((a, b) => a.votes < b.votes)}
            )
        })
    }

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

    function addIssue(newIssue){
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
            .catch(err => console.log(err.respsonse.data.errMsg))
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

    function upvoteIssue(issueId){
        userAxios.put(`/api/issues/upvote/${issueId}`)
            .then(res => {
                setUserState(prevUserState => {
                    return(
                        {...prevUserState,
                        issues: prevUserState.issues.map(issue => (
                            issue._id === issueId ? res.data : issue))}
                    )
                })
            })
            .catch(err => console.log(err))
    }

    function downvoteIssue(issueId){
        userAxios.put(`/api/issues/downvote/${issueId}`)
        .then(res => {
            setUserState(prevUserState => {
                return(
                    {...prevUserState,

                    issues: prevUserState.issues.map(issue => (
                        issue._id === issueId ? res.data : issue))}
                )
            })
        })
            .catch(err => console.log(err))
    }

    function getComments(_id){
        userAxios.get(`/api/comments/${_id}`)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    comments: res.data
                }))
            })
            .catch(err => console.log(err))
    }

    function addComment(comment, issueId){
        userAxios.post(`/api/comments/post/${issueId}`, comment)
            .then(res => console.log(res))
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
                    getAllIssues,
                    upvoteIssue,
                    downvoteIssue,
                    resetAuthError,
                    getComments,
                    addComment,
                    sortList
                }}
            >
                {props.children}
            </UserContext.Provider>
            
        </div>
    )
}