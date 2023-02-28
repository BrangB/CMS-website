import React, {useState} from 'react'
import { AiFillEye, AiFillEyeInvisible, } from "react-icons/ai";
import { FaKey ,FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Animation from './Animation';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { actions } from '../store/store';
import {  useDispatch } from "react-redux";
import { app } from '../firebase/firebaseConfig'

function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [message, setMessage] = useState('Invalid Email or Password')
    const [data, setData] = useState({})
    const auth = getAuth();
    const dispatch = useDispatch()

    const handler = (event) => {
        // let newInput = { [event.target.name] : event.target.value}
        setData({...data, [event.target.name] : event.target.value })
      }

    const showErrorMessage = () => {
        setErrorMessage(true)
        setTimeout(() => {
          setErrorMessage(false)
        }, 3000);
    }

    const checkSignIn = () => {
        dispatch(actions.signInFnc())
      }
    const handlerLogIn = () => {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(res => {
          console.log(res.user)
          checkSignIn()
        })
        .catch(err => {
          console.log(err.message)
          switch (err.message) {
            case 'Firebase: Error (auth/email-already-in-use).':
              setMessage("This email has already used")
              break;
            case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
              setMessage("Password should be at least 6 characters")
              break;
            default:
              setMessage("Invalid Email or Password")
              break;
          }
          showErrorMessage()
        })
      }
  return (
    <div>
        <Animation>
        <div className={`xsm:w-[300px] xsm:h-[450px] md:w-[350px] relative bg-[#f8fafb91] xsm:rounded-lg flex flex-col items-center justify-center xsm:py-4 xsm:px-3 xsm:shadow-sm`} >
            <h1 className='xsm:text-3xl font-bold text-center mb-6 text-[#081D54]'>SIGN UP</h1>
            <div className='flex flex-col items-center justify-center w-full xsm:px-3 xsm:mt-5'>
                <div className='w-full relative xsm:mb-5'>
                  <input type="email" placeholder='Email' name='email'  className=' w-full xsm:h-[40px] md:h-[45px] xsm:rounded-sm md:rounded-md xsm:px-10 xsm:py-2 bg-[#ffffffe3] border-none outline-none' onChange={(event) => handler(event)}/><span className='absolute top-3 left-2'><FaEnvelope /></span>
                  <p className={`bg-[#fd5858be] ${errorMessage ? "block" : "hidden"} text-white  absolute py-1 px-4 text-sm top-[-35px] left-2 rounded-md`}>{message}</p>
                </div>
                <div className=' w-full relative xsm:mb-5'>
                  <input type={showPassword ? "text" : "password"} name='password' placeholder='Password'  className='w-full  xsm:h-[40px] md:h-[45px] xsm:rounded-sm md:rounded-md xsm:px-10 xsm:py-2 bg-[#ffffffe3]  border-none outline-none ' onChange={(event) => handler(event)}/><span className='absolute top-3 left-2'><FaKey /></span> <span  onClick={() =>setShowPassword(!showPassword)} className='absolute top-3 right-3 text-lg'>{showPassword ? <AiFillEyeInvisible size={'20px'}/> : <AiFillEye size={'20px'}/>}</span>
                  {/* <p className={`bg-[#fd5858] ${errorMessage ? "block" : "hidden"} absolute py-1 px-4 text-sm top-[-30px] left-2 rounded-md`}>{message}</p> */}
                </div>
                <button className='bg-[#3F87E6] text-white xsm:rounded-sm xsm:py-2 xsm:px-4 xsm:text-md rounded-sm' onClick={handlerLogIn}>Submit</button>
            </div>
            <div className='mt-2 flex flex-col items-center p-2'>
                <hr className='bg-[#031D3F] border-0 w-28 h-[1px] m-4' />
                <p className='text-center xsm:text-sm'>If you already have account, <Link to='/'><span className='text-[#404aa3] hover:underline duration-200'>Log In</span></Link></p>
            </div>
        </div>
        </Animation>
    </div>
  )
}

export default SignUp