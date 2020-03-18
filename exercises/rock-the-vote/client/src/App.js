import React, {useContext} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home.js'
import IssueList from './components/IssueList.js'
import NavBar from './components/NavBar.js'
import Profile from './components/Profile.js'
import {UserContext} from './context/UserProvider.js'

function App(){
    const {token, logout} = useContext(UserContext)

    return(
        <div>
            <NavBar logout={logout}/>
            <Switch>
                <Route exact path='/' render={() => token ? <Redirect to='/profile'/> : <Home/>}/>
                <Route path='/posts' render={() => <IssueList/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
            </Switch>
        </div>
    )
}

export default App