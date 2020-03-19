import React, {useContext} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home.js'
import IssueList from './components/IssueList.js'
import NavBar from './components/NavBar.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import {UserContext} from './context/UserProvider.js'

function App(){
    const {token, logout, getUserIssues} = useContext(UserContext)

    return(
        <div>
            <NavBar logout={logout} getUserIssues={getUserIssues}/>
            <Switch>
                <Route exact path='/' render={() => token ? <Redirect to='/profile'/> : <Home/>}/>
                <Route path='/posts' render={() => token ? <Public/> : <Home/>}/>
                <Route path='/profile' render={() => token ? <Profile/> : <Home/>}/>
            </Switch>
        </div>
    )
}

export default App