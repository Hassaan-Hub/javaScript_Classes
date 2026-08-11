import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const signinFunction = () =>{
    navigate("/about");
  }

  return (
    <div>
      <h1>Login page</h1>

      <button onClick={signinFunction}>sign in</button>
    </div>
  )
}

export default Login