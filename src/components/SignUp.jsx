import React, {useState} from 'react'
import { AiFillEye, AiFillEyeInvisible, } from "react-icons/ai";
import { FaKey ,FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Animation from './Animation';

function SignUp() {
    const [showPassword, setShowPassword] = useState(true)
  return (
    <div>
        <Animation>
        <div className={`xsm:w-[300px] xsm:h-[450px] md:w-[350px] relative bg-[#f8fafb91] xsm:rounded-lg flex flex-col items-center justify-center xsm:py-4 xsm:px-3 xsm:shadow-sm`} >
            <h1 className='xsm:text-2xl font-bold text-center mb-3'>SIGN UP</h1>
            <div className='flex flex-col items-center justify-center w-full xsm:px-3 xsm:mt-5'>
                <div className='w-full relative xsm:mb-5'><input type="email" placeholder='Email'  className=' w-full xsm:h-[40px] md:h-[45px] xsm:rounded-sm md:rounded-md xsm:px-10 xsm:py-2 bg-[#ffffffe3] border-none outline-none'/><span className='absolute top-3 left-2'><FaEnvelope /></span></div>
                <div className=' w-full relative xsm:mb-5'><input type={showPassword ? "text" : "password"} placeholder='Password'  className='w-full  xsm:h-[40px] md:h-[45px] xsm:rounded-sm md:rounded-md xsm:px-10 xsm:py-2 bg-[#ffffffe3]  border-none outline-none '/><span className='absolute top-3 left-2'><FaKey /></span> <span  onClick={() =>setShowPassword(!showPassword)} className='absolute top-3 right-3 text-lg'>{showPassword ? <AiFillEyeInvisible size={'20px'}/> : <AiFillEye size={'20px'}/>}</span></div>
                <button className='bg-[#3F87E6] text-white xsm:rounded-sm xsm:py-2 xsm:px-4 xsm:text-md rounded-sm'>Submit</button>
            </div>
            <div className='mt-2 flex flex-col items-center p-2'>
                <hr className='bg-[#031D3F] border-0 w-28 h-[1px] m-4' />
                <p className='text-center xsm:text-sm'>If you already have account, <Link to='/LoginForm'><span className='text-[#404aa3] hover:underline duration-200'>Log In</span></Link></p>
            </div>
        </div>
        </Animation>
    </div>
  )
}

export default SignUp