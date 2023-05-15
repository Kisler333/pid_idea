import React, { useState,useContext } from 'react'
// import './signIn.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './signIn.css'
import SignUp from '../signUp-page/signUp'
import AppContext from '../../../contexts/topics'



const SignIn = ( {handleContinue}) => {
  const {createUser} = useContext(AppContext)
  const [gmail,setGmail]=useState('')
  const [password,setPassWord]=useState('')
  const [passwordConfirm,setPasswordConfirm]=useState('')
  const [age,setAge]=useState('')
  const [gender,setGender]=useState('')
  const [topics,setTopics]=useState('')
  // const [country,setCountry]=useState('')
  const [mode, setMode] = useState('sign')

  //if (mode ==='continue'){
   // console.log("u")
    // welcome = <div ><h4 className='text-dark' >Tell us what you’re interested in</h4>
    // <h6 className='subtitle'>*Pick at least 1 topic</h6></div>
    // content = <SignUp/>
  //}
  
  const handleSignIn= async()=>{
   
//     const newUser = await axios.post(url, {gmail, password, passwordConfirm,age,gender,topics},{
//       // ,country
//       headers:{
//         'Content-Type': 'application/json'
//       },
      
//       withCredentials: true,

     
//     }) 
   
// //if (newUser.data.status ==='success')
//     return  await newUser.data
createUser({gmail, password, passwordConfirm,age,gender})
 
 
   }
  const onhandleContinue = async() =>{
    //validation
     console.log(!gmail.match('^[a-zA-Z0-9._:$!%-]+@gmail.com$'));
    
    
    if(!gmail.match('^[a-zA-Z0-9._:$!%-]+@gmail.com$')||!age ||!password||!passwordConfirm||!gender)
    // ||!country
    return

    //if(!gmail.match('^[\w.+\-]+@gmail\.com$')||!age ||!password||!passwordConfirm||!gender)
    // ||!country
    //return

    //const res =  handleSignIn()
    handleSignIn()
    //console.log(res) 
    handleContinue()
    //const Navigate=useNavigate()
    //setMode('continue')

  }
 // const Navigate=useNavigate()
    const url='http://localhost:8000/api/users/signIn'
   
    
    
    
    const handleGmailInput = (e)=>{
      setGmail(e.target.value)
    }
    const handlePasswordInput = (e)=>{
      setPassWord(e.target.value)
    }
    
    const handlePasswordConfirm=(e)=>{
      setPasswordConfirm(e.target.value)
    }

    const handleAgeInput = (e)=>{
      setAge(e.target.value)
    }

    const handleGender=(e)=>{
      setGender(e.target.value)
    }

    // const handleTopics=(e)=>{
    //   setTopics(e.target.value)
    // }

    // const handleCountry=(e)=>{
    //   setCountry(e.target.value)
    // }
    const returnParameters = (e)=>{
      return {gmail, password, passwordConfirm,age,gender,topics}
      
    }
    // const sharedValue = {
    //   returnParameters
    // }
  
  return (
   

    <div className='w-75'>
        <form className='d-flex p-5 flex-column  justify-content-center' onSubmit={handleSignIn}>
        <input required onChange={handleGmailInput} className='form-control rounded-pill my-1' type="email" value={gmail} placeholder='Email'/>
        
        <input onChange={handlePasswordInput} className=' form-control rounded-pill my-1' type="Password" value={password} placeholder='Password'/>
        <input onChange={handlePasswordConfirm} className=' form-control rounded-pill my-1'  type="Password" value={passwordConfirm} placeholder='Password Confirm'/>
        <input  onChange={handleAgeInput}className='form-control rounded-pill my-1'type="Age" value={age} placeholder='Age'/>

        <select onChange={handleGender} className="form-select form-select rounded-pill my-1" type="Gender" value={gender} aria-label=".form-select-sm example">
        <option >Gender</option>
        <option value="1">Female</option>
        <option value="2">Male</option>
        <option value="3">Other</option>
        </select>

        {/* <select onChange={handleCountry} className="form-select form-select rounded-pill my-1" type="Country" value={country} aria-label=".form-select-sm example">
        <option selected>Country</option>
        <option value="1">USA</option>
        <option value="2">Israel</option>
        </select> */}
        
        {/* '/topics' */}
{/* onClick={handleContinue} */}
         <button onClick={onhandleContinue} type='submit'  className='mx-auto text-black rounded-pill btn-custom btn-sign p-2 m-3' >Continue</button>
        </form>
     
        {/* return(
          <div>
            <Select
            style={{width:"150px"}}
            value={selectedCountry}
            onChange={(e)=>selectCountryHandler(e.target.value)}
            >
              {!!countryArr?.length&&
              countryArr.map(({label,value})=>(
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
            </div>
              ); */}


        

    </div>
     
  )
}

export default SignIn
