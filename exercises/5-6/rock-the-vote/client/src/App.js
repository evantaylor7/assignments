import React, {useContext} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import IssueDetail from './components/IssueDetail.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import {UserContext} from './context/UserProvider.js'

function App(){
    const {token, logout, getUserIssues} = useContext(UserContext)

    return(
        <div>
            {token && <NavBar logout={logout} getUserIssues={getUserIssues}/>}
            <Switch>
                <Route 
                    exact path='/' 
                    render={() => token ? <Redirect to='/profile'/> : <Home/>}
                />
                <ProtectedRoute 
                    path='/posts' 
                    component={Public}
                    redirectTo='/'
                    token={token}
                />
                <ProtectedRoute 
                    path='/profile' 
                    component={Profile}
                    redirectTo='/'
                    token={token}
                />
                <ProtectedRoute 
                    path='/issues/detail/:issueId' 
                    component={IssueDetail}
                    redirectTo='/'
                    token={token}
                />
            </Switch>
        </div>
    )
}

export default App