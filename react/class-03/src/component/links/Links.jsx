import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Links = () => {


    return (
        <div>
            <ul className='text-blue-600'>
                <li className='hover:text-blue-800'><NavLink to={"/"}>Home</NavLink></li>
                <li className='hover:text-blue-800'><NavLink to={"/about"}>About</NavLink></li>
                <li className='hover:text-blue-800'><NavLink to={"/content"}>Content</NavLink></li>
                <li className='hover:text-blue-800'><NavLink to={"/login"}>Login</NavLink></li>
                <li className='hover:text-blue-800'><NavLink to={"/profile/:username"}>Profile</NavLink></li>
            </ul>
        </div>
    )
}

export default Links