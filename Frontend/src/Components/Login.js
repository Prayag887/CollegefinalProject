import React, { useState } from 'react'
import './login.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const[chooser, setChooser]=useState(false)
    const [email, setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[popup, setPopup]=useState(false);
    const navigate=useNavigate()
    const signIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential)
            navigate('/prediction')
        })
        .catch((error)=>{
            console.log(error)
            setPopup(true)
            setTimeout(()=>{
              setPopup(false)
            },2000)
        })
        
    }

    const signUp=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential)
            navigate('/prediction')
        })
        .catch((error)=>{
            console.log(error)
            setPopup(true)
            setTimeout(()=>{
              setPopup(false)
            },2000)
        })
        
    }
  return (
    <div className="login-bg">
  <div className="form">
    <form className="login-form">
    <p>{
      popup?<p className="popup">Something went wrong!</p>:""
      }</p>
      <input type="text" placeholder="username"value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <h1>{chooser}</h1>
      <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

    {  chooser?<button className="login-btn" onClick={signIn}>login</button>:

      <button className="login-btn" onClick={signUp}>Register</button>}
      <div className='create-login'>
      <span >{chooser?"Not Registered?":"Have account?"}</span> <span onClick={()=>setChooser(!chooser)} className='create-logins'>{chooser?"Create account":"Login"}</span>
      </div>
    </form>
</div>
    </div>
  )
}

export default Login