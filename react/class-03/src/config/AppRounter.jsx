import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Content from '../pages/Content'
import Login from '../pages/Login'

const AppRounter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    
                    <Route path='/about' element={<About />}></Route>
                    
                    <Route path='/content' element={<Content />}></Route>
                    
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRounter