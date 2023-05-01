import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../login-page/logIn'
import SignIn from '../signIn-page/signIn'
 import SignUp from '../signUp-page/signUp'
import './homePage.css'
import Dashboard from '../dashboard/dashboard'
//import Dashboard from '../dashboard/dashboard'
 

const HomePage = () => {
  const [mode, setMode] = useState('home')
  const to=useNavigate();
  const handleLoginMode = ()=>{
    setMode('login')
  }
  const handleSignMode = ()=>{
    setMode('sign')  
  }
   const handleContinue = ()=>{
    setMode('continue')
   }
  let welcome = <div><h1>Welcome to PidIdea!</h1><h3 className='subtitle'>Let's get started:)</h3></div>
  let content = <div className='buttons myhandleSignUpMode-3 w-100  d-flex justify-content-center pb-5  '>
  <button onClick={handleSignMode} className=' btn-custom rounded-pill btn-sign  p-3 py-2 m-3' >Sign Up</button>
  <button onClick={handleLoginMode}  className='  btn-custom rounded-pill btn-login p-2 m-3'>Login</button>
</div>

  if (mode ==='login'){
    welcome = <div ><h1 className='text-dark' >Welcome to PidIdea!</h1><h3 className='subtitle'>Let's get started:)</h3></div>
    content = <Login handleSuccess={()=>{setMode('dashboard')}}/>
  }
  if(mode ==='sign'){
    welcome = <div ><h1 className='text-dark' >Welcome to PidIdea!</h1><h3 className='subtitle'>Nice to meet you:)</h3></div>
    content = <SignIn handleContinue={handleContinue}/>
  }
  if (mode ==='continue'){
    welcome = <div ><h4 className='text-dark' >Tell us what you’re interested in</h4>
    <h6 className='subtitle'>*Pick at least 1 topic</h6></div>
     content = <SignUp/>
    //content = <Dashboard/>
  }
  if(mode==="dashboard"){
    welcome=<div ><h4 className='text-dark' >walabala bitches</h4>
    </div>
    //return <Dashboard/>
    to('/dashboard');
    console.log("walabala");
  }
  return (
    <div className='container main'>
      <div className='card text-center'>
       
       <div className=' '>
           {welcome}
        </div>
        {content}
      </div>
    </div>

  )
}

export default HomePage