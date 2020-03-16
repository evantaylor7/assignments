import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Posts from './components/Posts.js'
import PostNew from './components/PostNew.js'
import NavBar from './components/NavBar.js'
import Profile from './components/Profile.js'

function App(){
    return(
        <div>
            <NavBar/>
            <Switch>
                <Route exact path='/' render={() => <Home/>}/>
                <Route path='/posts' render={() => <Posts/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
            </Switch>
        </div>
    )
}

export default App