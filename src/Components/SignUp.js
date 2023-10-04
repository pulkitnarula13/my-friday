import React, { useRef, useState } from 'react';
import './styles/SignUp.css'; // Import your CSS styles
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate(); // Initialize useNavigate

  const [userEmail, setUserEmail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(auth);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email + " " + password);
    try {
    await createUserWithEmailAndPassword(auth,email, password).then((userCredential) => {
        console.log(userCredential);
    });
    // User is signed up successfully
    setUserEmail(email); // Store the user's email
    navigate('/welcome'); // Navigate to the welcome page
    } catch (error) {
    console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            ref={emailRef}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={passwordRef}
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
