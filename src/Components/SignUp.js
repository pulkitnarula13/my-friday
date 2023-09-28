import React, { useRef, useState } from 'react';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate(); // Initialize useNavigate

    const [userEmail, setUserEmail] = useState('');

    const handleSignUp = async (e) => {
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
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white w-full sm:w-96 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
            <form onSubmit={handleSignUp}>
            <div className="mb-4">
                <input
                type="email"
                placeholder="Email"
                ref={emailRef}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                required
                />
            </div>
            <div className="mb-4">
                <input
                type="password"
                placeholder="Password"
                ref={passwordRef}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 w-full"
            >
                Sign Up
            </button>
            </form>
        </div>
        </div>
    );
}

export default SignUp;
