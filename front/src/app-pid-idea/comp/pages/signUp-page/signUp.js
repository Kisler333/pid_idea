import React from 'react'
import { Link } from 'react-router-dom'
import ListTopics from './topic-comp/ListTopics'


const SignUp = () => {
  
  return (
    
    <div className=''>
     
    <form className='d-flex  flex-column  justify-content-center'>
       <ListTopics/>
     <button type='submit' className='mx-auto text-black rounded-pill btn-custom btn-sign p-2 m-1' >Continue</button>
    
    </form>
 
</div>  
  )
}

export default SignUp
