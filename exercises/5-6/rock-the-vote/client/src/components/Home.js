import React, {useState, useContext} from 'react'
import AuthForm from './AuthForm.js'
import {UserContext} from '../context/UserProvider.js'

function Home(){
    const initInputs = {username: '', password: ''}
    const [inputs, setInputs] = useState(initInputs)
    const [toggleAuth, setToggleAuth] = useState(true)

    const {signup, login, errMsg, resetAuthError} = useContext(UserContext)

    function toggle(){
        setToggleAuth(prevToggleAuth => !prevToggleAuth)
        resetAuthError()
    }

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    return(
        <div>
            <h1>Welcome to You've Got Issues</h1>
            <h2>{toggleAuth ? 'Sign up' : 'Log in'}</h2>
            {toggleAuth ? 
                <>
                    <AuthForm 
                        btnText='Sign up'
                        inputs={inputs}
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        errMsg={errMsg}
                    /> 
                    <button onClick={toggle}>Already a member?</button>
                </>
                :
                <>
                    <AuthForm 
                        btnText='Log in'
                        inputs={inputs}
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        errMsg={errMsg}
                    />
                    <button onClick={toggle}>Not a member?</button>
                </>
            }
        </div>
    )
}

export default Home