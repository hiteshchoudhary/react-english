import React, { useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
const Login = () => {
    const {user,setUser}=useContext(UserContext)
    const [username,setUsername]= useState('')
    const [password,setPassword]= useState('');
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
        setUsername(user.username);
    }
  return (
    <div>
      <h2>Login</h2>
      <input type=' text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
      <input type="password" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}></input>
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login
