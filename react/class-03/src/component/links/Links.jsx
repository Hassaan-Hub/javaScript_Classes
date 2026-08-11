import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/content"}>Content</NavLink></li>
            </ul>
        </div>
    )
}

export default Links