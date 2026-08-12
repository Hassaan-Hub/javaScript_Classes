import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Content from '../pages/Content'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'

const AppRounter = () => {
    

    
  const [user, setUser] = useState(false);

  useEffect(() => {
    const isUser = localStorage.getItem("user");
    setUser(isUser)
  }, [])
  

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={user ? <Home /> : <Login />}></Route>

                    <Route path='/about' element={user ? <About /> : <Login />}></Route>

                    <Route path='/content' element={user ? <Content /> : <Login />}></Route>

                    <Route path='/login' element={user ? <Profile /> : <Login />}></Route>

                    <Route path='/profile/:username' element={user ? <Profile /> : <Login /> }></Route>
                    
                    <Route path='/*' element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRounter