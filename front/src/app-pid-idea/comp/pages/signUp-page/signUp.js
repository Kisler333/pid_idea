import React, { useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ListTopics from './topic-comp/ListTopics'
import Dashboard from '../dashboard/dashboard'
import axios from 'axios'
import AppContext from '../../../contexts/topics'


//const handleContinue()

const SignUp = () => {
  const [mode, setMode] = useState('signUp')
  const to=useNavigate()
  const {returnTopics, returnUser} = useContext(AppContext)
  const url='http://localhost:8000/api/users/signIn'
  const handleContinue = async ()=>{
    console.log('blat');
    //addUsersTopic({title: 'Drawing', imgUrl: 'pics/drawing.jpg'})
    let params=returnUser()
    params={...params,topics:returnTopics()}
    console.log(params);
    const newUser = await axios.post(url, params,{
    
      headers:{
        'Content-Type': 'application/json'
      },
      
      withCredentials: true,

     
    }) 
    //returnTopics();
    to('/dashboard')
    
    
  }
  return (
    
    <div className=''>
      {/* <form className='d-flex p-5 flex-column  justify-content-center' onSubmit={handleSignIn}></form> */}
     
    <form className='d-flex  flex-column  justify-content-center'>
       <ListTopics/>
       <button onClick={handleContinue} type="button"  className='mx-auto text-black rounded-pill btn-custom btn-sign p-2 m-1' >Continue</button>
    
    </form>
 
</div>  
  )
}


export default SignUp
