import React from 'react'
import HomePage from '../home-page/HomePage'

import { Link } from 'react-router-dom'
import './login.css'

// import React, { useState } from 'react'
// import {Link,useNavigate} from 'react-router-dom'
// import axios from 'axios'
//const url='localhost:8000/app/signup'

const Login = () => {
//  const url='http://localhost:8000/api/login'
//      const [Gmail,setGmail]=useState('')
//      const [Password,setPassWord]=useState('')
  //   const [passwordConfirm,setPasswordConfirm]=useState('')
    
  //   const handleGmailInput = (e)=>{
  //     setGmail(e.target.value)
  //   }
  //   const handlePasswordInput = (e)=>{
  //     setPassWord(e.target.value)
  //   }
    
  //   const handlePasswordConfirm=(e)=>{
  //     setPasswordConfirm(e.target.value)
  //   }
  
  //   const handleLogIn=async(e)=>{
  //    e.preventDefault()
  //    await axios.post(url, {Gmail, Password, passwordConfirm})  
    
  
  
  //   }
  return (
    

    <div className='w-75'>
        <form className='d-flex p-5 flex-column  justify-content-center'>
        <input className='form-control rounded-pill my-1'  type="Gmail" placeholder='Email'/>

        <input className='form-control rounded-pill my-1' type="Password" placeholder='Password'/>

         <button type='submit' className='mx-auto text-black rounded-pill btn-custom btn-sign p-2 m-3' >Login!</button>
        </form>
     
         <a className='forgot'>Forgot password?</a>
    </div>

    
     
  )
}


export default Login