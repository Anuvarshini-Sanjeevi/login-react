import React,{useState}from 'react'
import './Register.css'
import '../../App.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'


// import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'


const Register = () => {
 const [email , setEmail]=useState('')
 const [userName , setUserName]=useState('')
 const [password , setPassword]=useState('')

 const createUser=()=>{
     Axios.post('http://localhost:3002/register',{
      Email:email,
      UserName:userName,
      Password:Password
     }).then(()=>{
      console.log('User has been created')
     })
 }
  return (
    <div className='loginPage flex'>

      <div className="container flex">


          


             <div className="footerDiv flex ">

              <span className="text">Don't have an account?</span>
              <Link to={'/register'}>
              <button className='btn'>Sign Up</button>
              </Link>

             </div>
  

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} alt="Logo Image" />
              <h3 className='showmessage'>Welcome</h3>
            </div>

            <form action="" className='form grid'>
              <span className='look'>Register Status will go here</span>

              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flex">

                <FaUserShield className='icon' />
                <input type="text" id='email' placeholder='Enter Email' onChange={(event)=>{
                    setEmail(event.target.value)
                }}/>

                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">

                <FaUserShield className='icon' />
                <input type="text" id='username' placeholder='Enter Username' onChange={(event)=>{
                    setuserName(event.target.value)
                }}/>

                </div>
              </div>

              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">

                <BsFillShieldLockFill  className='icon' />
                <input type="password" id='password' placeholder='Enter Password' onChange={(event)=>{
                    setpassword (event.target.value)
                }}/>

                </div>
              </div>

              <button type='submit' className='btn flex' onClick={createUser}>
                <span>Register</span>
                <AiOutlineSwapRight className='icon'/>
              </button>

              <span className='forgotPassword'>
                Forgot your password? <a href="">Click Here</a>

              </span>

            </form>
          </div>
      </div>
      </div>
  )
}

export default Register
