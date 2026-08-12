import React from 'react'
import Links from '../component/links/Links'
import { useLocation, useParams } from 'react-router-dom';

const Profile = () => {

  const { username } = useParams();
  const {state} = useLocation();

  return (
    <div className='p-2'>
      <h1>Profile {username}</h1>
      <Links />
      <h3>active username {state?.name}</h3>
    </div>
  )
}

export default Profile