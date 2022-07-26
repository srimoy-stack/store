import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import './App.css';
 import Home from './Home';
import Login from './login'

import {auth}from "./firebase"
import {signOut} from "firebase/auth"

import {React,useState} from "react";
function App() {
  const[authIn,setAuthIn]=useState(false)

  const singUserOut=()=>{
    signOut(auth).then((response)=>{
      localStorage.clear()
      setAuthIn(false)
      window.location.pathname="/login"
    })
  }
  return (
    <Router> 
      <nav ><Link to = '/' className="nav-item">Home</Link>
    { !authIn? <Link to='/login'   className="button">Login</Link>: <><button onClick={singUserOut}>Log out</button></>}
     </nav>
      <Routes><Route path="/" element={<Home  authIn={authIn}/>}/>
    <Route path="/login" element={<Login setAuthIn={setAuthIn}/>}/>
    
      
    </Routes>
    </Router>
  
    
  );
}

export default App;