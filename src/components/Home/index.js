import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { useNavigate } from "react-router-dom";
import { brush, cloud1, Image1 } from "../../constants/media/export";
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

  </div>
     
       </div>
  );
};
