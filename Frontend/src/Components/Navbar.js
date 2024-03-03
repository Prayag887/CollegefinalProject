import React,{useState,useEffect} from 'react'
import '../css/main.css'
import logo from '../assets/idea.gif'
import './navbar.css'
import { Link,NavLink } from 'react-router-dom'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {auth} from '../firebase'
const Navbar = () => {
  const navigate=useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
  }, []);

    const [text, setText] = useState('');
    const message = "Sustainable Energy Production Prediction";
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const animationInterval = setInterval(() => {
        if (currentIndex < message.length) {
          setText((prevText) => prevText + message[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
          setText('');
        }
      }, 150); 
  
      return () => clearInterval(animationInterval);
    }, [currentIndex, message]);
    const Register=()=>{
      navigate("/login")
    }
    const Logout = async () => {
      try {
        await signOut(auth);
        console.log('User signed out successfully.');
        // Optionally, redirect to a specific page after sign-out
        // window.location.href = '/login';
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };
  return (
    <>
 <header>
    

        <Link to='/' style={{ textDecoration: 'none', color: '#000000' }}>
        <div className="nav-logo logo">
            {/* this is logo side nav */}
            <span className='logo-title'><span><img className='nav-in-logo' src={logo} alt="logo"  height="50px" width="50px" style={{borderRadius:10, height:50,width:50, margin:10}}/></span><span className='nav-title'><div className="character-by-character-animation">
      {text}
    </div></span></span>

        </div>
        </Link>


        <ul style={{paddingTop:12}}>
            
            <li><NavLink exact={true} to='/' className='logo' >Home</NavLink></li>
            <li><NavLink exact={true} to='/prediction' className='logo' >Prediction</NavLink></li>
            <li><NavLink exact={true} to='/probability' className='logo'>Probability</NavLink></li>
            <li><NavLink exact={true} to='/contact' className='logo'  >Contact</NavLink></li>

            {
              isLoggedIn?
              
            <li><span className='logo bts' onClick={Logout}>LogOut</span></li>:
              <li><span className="logo bts" onClick={Register}>SignUp</span></li>
}
        </ul>
    </header>

    </>
  )
}

export default Navbar