   import LoginIcon from '@mui/icons-material/Login';  
   import LogoutIcon from '@mui/icons-material/Logout';
   import { useNavigate } from "react-router-dom";
   import { AuthContext } from "../../context/AuthContextProvider";
   import { useContext } from "react";
   import "./index.css"
   import React, { useEffect } from "react";
   import { Snackbar, Alert } from '@mui/material';
   
   import { logo } from "../../constants/media/export";

   export const Navbar = () => {
     const navigate = useNavigate();
     const [open, setOpen] = React.useState(false);
     

     const { isAuthenticated,logout} = useContext(AuthContext);

     useEffect(() => {
       if (isAuthenticated) {
         navigate('/');
       }
     }, [isAuthenticated, navigate]);

     const handleLogout = () => {
      logout()
      setOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
     };

     const handleClose = (event, reason) => {
       if (reason === 'clickaway') {
         return;
       }
       setOpen(false);
     };

     return (
       <div className="nav" >
         <img src={logo} alt="" />
         <nav className="nav-links"> 
           <ul>
             <li onClick={()=>navigate("/")}><a href="/" className={window.location.pathname === "/" ? "active" : ""}>Home</a></li>
             <li><a href="/about" className={window.location.pathname === "/about" ? "active" : ""}>About</a></li>
             <li><a href="/contact" className={window.location.pathname === "/contact" ? "active" : ""}>Contact</a></li>
           </ul>
           {isAuthenticated ? (
             <button onClick={handleLogout}>Logout <LogoutIcon/></button>
           ) : (
             <button onClick={()=>navigate("/login")}>Login <LoginIcon/></button>
           )}
           {/* <h3 onClick={()=>navigate("/signup")}>signup</h3> */}
         </nav>
         <Snackbar
           open={open}
           autoHideDuration={3000}
           onClose={handleClose}
           anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
         >
           <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
             Logged out successfully Thank You!
           </Alert>
         </Snackbar>
       </div>
     )
   }