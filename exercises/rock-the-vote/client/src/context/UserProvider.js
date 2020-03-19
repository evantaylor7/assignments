import React, {useState} from 'react'
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
        comments: []
    }

    const [userState, setUserState] = useState(initState)
    console.log(userState)

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
            .catch(err => console.log(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post('/auth/login', credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                getUserIssues()
                // getComments()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
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
        axios.get('/api/issues')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    function upvoteIssue(issueId){
        userAxios.put(`/api/issues/upvote/${issueId}`)
            .then(res => {
                console.log(res)
                getUserIssues()
            })
            .catch(err => console.log(err))
    }

    function downvoteIssue(issueId){
        userAxios.put(`/api/issues/downvote/${issueId}`)
            .then(res => {
                console.log(res)
                getUserIssues()
            })
            .catch(err => console.log(err))
    }

    // function getComments(){
    //     const issueId = userState.issues._id
    //     userAxios.get(`/api/comments/${issueId}`)
    //         .then(res => console.log(res))
    //         .catche(err => console.log(err))
    // }

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
                    downvoteIssue
                }}
            >
                {props.children}
            </UserContext.Provider>
            
        </div>
    )
}