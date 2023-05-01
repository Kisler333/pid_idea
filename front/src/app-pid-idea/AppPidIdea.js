import React from 'react'
//import { Redirect } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './comp/pages/home-page/HomePage'
import Login from './comp/pages/login-page/logIn'
import SignIn from './comp/pages/signIn-page/signIn'
import Dashboard from './comp/pages/dashboard/dashboard'
import SignUp from './comp/pages/signUp-page/signUp'
import ListTopics from './comp/pages/signUp-page/topic-comp/ListTopics'



const AppPidIdea = () => {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/signIn' element={<SignIn />} />
        <Route path='/logIn' element={<Login />} />
        <Route path='/topics' element={<ListTopics />} /> */}
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='*' element={<HomePage />} />
        {/* <Route path="*">
        <Redirect to="/" />
      </Route> */}


      </Routes>

    </Router>
    //homePage</div>
  )
}

export default AppPidIdea

