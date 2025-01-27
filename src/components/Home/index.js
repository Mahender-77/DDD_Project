import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./index.css";
import { Image1 } from "../../constants/media/export";
export const Home = () => {
  return (
    <div className="home">
      <div className="section">
        {" "}
        <img src={Image1} alt="" />
        <div className="section-content">
          <p>
            Turning ideas into reality through creativity, code, and deployment.
          </p>
          <button
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

      <div className="features">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
