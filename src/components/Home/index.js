import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { useNavigate } from "react-router-dom";
import { brush, cloud1, deve, Image1, logo } from "../../constants/media/export";
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
          {/* <button
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
          </button> */}
        </div>
      </div>

      <div className="feature">
        <div className="features" onClick={()=>navigate("/design")}> <img src={brush} alt="Design brush" /> <p>Design</p> <span>Browse. Choose. Customize. Simplify. Create.</span></div>
        <div className="features" onClick={()=>navigate("/codeEditer")} ><img src={deve} alt="develp" /></div>
        <div className="features" ><img src={cloud1} alt="Deploy cloud" /> <p>Deploy</p> <span>Deploy. Scale. Simplify. Optimize. Deliver.</span></div>
       
      </div>   
      <div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <img className="footer-logo" src={logo} alt='brand-logo'/>
                        {/* <p className="footer-text">One-stop solution for designing, deployment, and more.</p> */}
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-heading">Resources</h3>
                        <ul>
                            <li><a href="/">Docs</a></li>
                            <li><a href="/">Tutorials</a></li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-heading">Connect with Us</h3>
                        <div className="social-links">
                            <a href="/">Twitter</a>
                            <a href="/">LinkedIn</a>
                            <a href="/">GitHub</a>
                        </div>
                        <p className="footer-text">Email: contact@Start2Launch.com</p>
                    </div>
                    </div>

<div className="footer-bottom">
    <p>© {new Date().getFullYear()} Start2Launch. All rights reserved.</p>
</div>
</footer>
</div>

     
       </div>
  );
};
