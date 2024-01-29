import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

const Profile = () => {
    const {user}= useContext(UserContext);
    console.log(user);
    const isAnyKeyEmpty = Object.values(user).some(
      (value) => value === "" || value === null
    );

    if (isAnyKeyEmpty) {
      return <div>entered a value</div>;
    }
 

    return <div>{user.username}</div>;
   
    
  
}

export default Profile
