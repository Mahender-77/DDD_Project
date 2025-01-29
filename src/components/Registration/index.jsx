// index.jsx
import { useState } from "react";
import "./index.css";

function Resistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    fetch(`http://localhost:8080/api/users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    alert("Registration Successful!");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          <input type="tel" name="contact" placeholder="Contact Number" required onChange={handleChange} />
          <input type="password" name="password" placeholder="Create Password" required onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Re-enter Password" required onChange={handleChange} />
          <button type="submit">Sign Up</button>
          <button className="login-btn">Already have an account? Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Resistration;
