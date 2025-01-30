import React, { useState } from "react";

import "./index.css";
import { group } from "../../constants/media/export";
export const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Registration successful!");
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Sign Up</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-row">
            <div className="label-input-container">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="form-row">
           
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">ConfirmPassword</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="button-group">
            <button type="submit" disabled={loading} className="signup-button">
              {loading ? "Loading..." : "sign up"}
            </button>
          </div>
        </form>
      </div>
        {/* <img style={{width:"40%",border:"1px solid red",position:"absolute",bottom:"0"}} src={group} alt="Group" /> */}
    </div>
  );
};
