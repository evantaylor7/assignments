import React from 'react'

function AuthForm(props){
    const {
        inputs: {
            username, 
            password
        }, 
        handleChange, 
        handleSubmit, 
        btnText,
        errMsg
    } = props

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='username' 
                    type='text' 
                    name='username'
                    value={username} 
                    onChange={handleChange}
                />
                <input 
                    placeholder='password' 
                    type='text' 
                    name='password'
                    value={password} 
                    onChange={handleChange}
                />
                <button>{btnText}</button>
                <p style={{color: 'red'}}>{errMsg}</p>
            </form>
        </div>
    )
}

export default AuthForm