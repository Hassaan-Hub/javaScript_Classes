import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const { user } = useContext(UserContext)

    return (
        <div>
            <h1>Profile</h1>
            <p>current user { user }</p>
        </div>
    )
}


export default Profile