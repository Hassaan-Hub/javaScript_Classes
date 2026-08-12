import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Content from '../pages/Content'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'

const AppRounter = () => {
    
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>

                    <Route path='/about' element={<About />}></Route>

                    <Route path='/content' element={<Content />}></Route>

                    <Route path='/login' element={<Login />}></Route>

                    <Route path='/profile/:username' element={<Profile />}></Route>
                    
                    <Route path='/*' element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRounter