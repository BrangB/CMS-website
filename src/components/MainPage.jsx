import React from 'react'
import LoginForm from "./LoginForm";
import {Route, Routes} from 'react-router-dom'
import SignUp from './SignUp';

function MainPage() {
  return (
    <div className='w-full h-screen bg-[#081D54] flex items-center justify-center relative'>
    <Routes>
        <Route path='/LoginForm' element={<LoginForm />} />
        <Route path='/SignUp' element={<SignUp />}/>
    </Routes>
    </div>
  )
}

export default MainPage