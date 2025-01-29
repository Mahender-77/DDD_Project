
import LoginIcon from '@mui/icons-material/Login';  
import { useNavigate } from "react-router-dom";
import "./index.css"
import React from "react";
// import { logo } from "../../constants/media/export";

export const Navbar = () => {
  const navigate = useNavigate();
  return (

<div className="nav" >
  {/* <img src={logo} alt="" /> */}
  <nav className="nav-links"> 
     <ul>
     <li onClick={()=>navigate("/")}><a href="/" className={window.location.pathname === "/" ? "active" : ""}>Home</a></li>
     <li><a href="/about" className={window.location.pathname === "/about" ? "active" : ""}>About</a></li>
     <li><a href="/contact" className={window.location.pathname === "/contact" ? "active" : ""}>Contact</a></li>
     </ul>   <button onClick={()=>navigate("/login")} >Login <LoginIcon/> </button>
   {/* <h3 onClick={()=>navigate("/signup")}>signup</h3> */}
</nav>
   </div>
  
  )
}