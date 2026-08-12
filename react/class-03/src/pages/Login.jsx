import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const handler = () => {
    localStorage.setItem("user", true);
  }
  
  
  const [name, setName] = useState("")
  const signinFunction = () => {
    navigate("/profile/addusername", {
      state: {
        name: name,
      }
    });
  }
  
  return (
    <div>
      <h1>Login page</h1>
      <input className='border-2 my-3 active:border-amber-500' type="text" value={name} onChange={(e) => {
        setName(e.target.value);
      }} /><br />
      <button className='border-2 px-2' onClick={() => {
        signinFunction();
        handler();
        setName("")
      }}>sign in</button>
    </div>
  )
}

export default Login