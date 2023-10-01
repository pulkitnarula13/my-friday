import React from "react";
import { useRef } from "react";
import "../Landing.css";
import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";
function Landing() {
  const hideLandingBTN = true;
  const LandingBTN = document.getElementsByClassName("active");

  const activeElementRef = useRef(LandingBTN);
  // if (activeElementRef.current && hideLandingBTN) {
  //     activeElementRef.current.style.display = hideLandingBTN ? 'none' : 'block';
  // }
  return (
    <div className="landing-page">
      <div className="header">
        <h1>Welcome to FRIDAY!</h1>
        <p>Exploring the Future of Artificial Intelligence</p>
      </div>
      <div className="content">
        <div className="image-container">
          <img
            src="https://via.placeholder.com/400x300.png?text=AI+Image+1"
            alt="AI Tech Image 1"
          />
          <img
            src="https://via.placeholder.com/400x300.png?text=AI+Image+1"
            alt="AI Tech Image 2"
          />
        </div>
        <div className="buttons">
          <button className="login-button">
            <BubblyLink to="/login">Login</BubblyLink>
          </button>
          <button className="signup-button">
            <BubblyLink to="/signup">Sign Up</BubblyLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
