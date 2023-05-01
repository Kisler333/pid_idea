import React,{useState} from 'react'
//import React from 'react'
import HomePage from '../home-page/HomePage'

import { Link } from 'react-router-dom'
import './login.css'

//import React, { useState } from 'react'
//import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

const url='localhost:8000/app/signup'

const Login = (props) => {
  const{handleSuccess}=props;
 const url='http://localhost:8000/api/users/logIn'
     const [gmail,setGmail]=useState('')
     const [password,setPassWord]=useState('')
    const [passwordConfirm,setPasswordConfirm]=useState('')
    
    
    const handleGmailInput = (e)=>{
      setGmail(e.target.value)
    }
    const handlePasswordInput = (e)=>{
      setPassWord(e.target.value)
    }
    
    const handlePasswordConfirm=(e)=>{
      setPasswordConfirm(e.target.value)
    }
  
    const handleLogIn=async(e)=>{
     e.preventDefault()
     await axios.post(url, {gmail, password, passwordConfirm})  

     handleSuccess();
     
  
     
 // console.log(await axios.post(url, {Gmail, Password, passwordConfirm}));
  
  
     }
  return (
    

    <div className='w-75'>
        <form className='d-flex p-5 flex-column  justify-content-center'onSubmit={handleLogIn}>
        <input className='form-control rounded-pill my-1'  type="email" placeholder='Email' value={gmail} onChange={handleGmailInput}/>

        <input className='form-control rounded-pill my-1' type="Password" placeholder='Password' value={password} onChange={handlePasswordInput}/>

         <button type='submit' className='mx-auto text-black rounded-pill btn-custom btn-sign p-2 m-3' >Login!</button>
        </form>
     
         <a className='forgot'>Forgot password?</a>
    </div>

    
     
  )
}


export default Login