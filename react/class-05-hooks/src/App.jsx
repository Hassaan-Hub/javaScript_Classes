import React from 'react'
import UserContextProvider from './components/context/UserContextProvider'
import Login from './components/config/Login'
import Profile from './components/config/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <h1>app component</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App