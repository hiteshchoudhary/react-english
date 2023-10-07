import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)

  if(!user) return <h1>Not logged in </h1>
  return (
    <div>

        <h1>Profile : {user.username}</h1>
    </div>
  )
}

export default Profile