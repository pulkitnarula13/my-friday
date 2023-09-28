// src/components/Login.js

import React, { useRef } from 'react';
import { auth } from '../Firebase';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
        await auth.signInWithEmailAndPassword(email, password);
        // User is logged in successfully
        } catch (error) {
        console.error('Error logging in:', error.message);
        }
    };

    return (
        <div className="w-1/2 mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Log In</h2>
        <form onSubmit={handleLogin}>
            <div className="mb-4">
            <input type="email" placeholder="Email" ref={emailRef} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
            <input type="password" placeholder="Password" ref={passwordRef} className="w-full p-2 border rounded" required />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Log In</button>
        </form>
        </div>
    );
}

export default Login;
