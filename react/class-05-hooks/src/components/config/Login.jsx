import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const loginFunction = () => {
        // Perform login logic here
        console.log('Logging in with:', username, password)
        setUser(username)
    }

    return (
        <div>
            Login<br />
            <input type="text" placeholder='username' value={username}
                onChange={(e) => setUsername(e.target.value)}
            /> <br />
            <input type="password" placeholder='password' value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button onClick={() => {
                loginFunction()
            }}
            >
                Login
            </button>
        </div>
    )
}

export default Login