import React from 'react'
import LoginForm from "./LoginForm";
import {Route, Routes} from 'react-router-dom'
import SignUp from './SignUp';

function LogInAndSignUp() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      {/* <LoginForm /> */}
        <Routes>
            <Route path='/' element={<LoginForm />} />
            <Route path='/SignUp' element={<SignUp />}/>
        </Routes>
    </div>
  )
}

export default LogInAndSignUp