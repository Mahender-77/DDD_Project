import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { useNavigate } from "react-router-dom";
import { brush, cloud1, Image1, logo } from "../../constants/media/export";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import "./index.css";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="section">
        {" "}
        <img src={Image1} alt="Home" />
        <div className="section-content">
          <p>
            Turning ideas into reality through creativity, code, and deployment.
          </p>
          <button
          onClick={()=>navigate("/login")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap:"10px",
              fontSize:"25px"
            }}
          >
            start <ArrowForwardIcon sx={{ fontSize: "1.5rem" }} />
          </button>
        </div>
      </div>

      <div className="feature">
        <div className="features" > <img src={brush} alt="Design brush" /> <p>Design</p> <span>Browse. Choose. Customize. Simplify. Create.</span></div>
        <div className="features" ></div>
        <div className="features" ><img src={cloud1} alt="Deploy cloud" /> <p>Deploy</p> <span>Deploy. Scale. Simplify. Optimize. Deliver.</span></div>
       
      </div>   
  <div className="footer">
    <div className="footer-section"> <img src={logo} alt="logo" width={"150px"} />
    <div style={{display:"flex",flexDirection:"column",justifyContent:"left",gap:"10px"}}><div style={{display:"flex"}}><LocationOnIcon/><p>  Hyderabad.</p></div>
    
    <p>KPHB Colony,Plot.No:104.</p>
    
    </div>
    <div style={{display:"flext",flexDirection:"column",gap:"80px",border:"1px solid red"}} >
    <div style={{display:"flex",gap:"20px"}}>
<FacebookIcon sx={{fontSize:"50px"}}/>
<InstagramIcon sx={{fontSize:"50px"}}/>

<GitHubIcon sx={{fontSize:"50px"}}/>
<CallIcon sx={{fontSize:"50px"}}/>
    </div>
<p>Regisster Now - <button style={{width:"80px",height:"30px",color:"white",backgroundColor:"black",borderRadius:"5px"}}>signup</button></p>


    </div>

   
  

    
    </div>
   
    <p>Copyright © 2023 - All Rights Reserved</p>
  </div>
     
       </div>
  );
};
