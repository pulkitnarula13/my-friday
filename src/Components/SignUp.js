import React, { useRef } from 'react';
import { auth } from '../Firebase';

function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignUp = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
            await auth.createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    }

    return (
        <div className="w-1/2 mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSignUp}>
            <div className="mb-4">
            <input type="email" placeholder="Email" ref={emailRef} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
            <input type="password" placeholder="Password" ref={passwordRef} className="w-full p-2 border rounded" required />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign Up</button>
        </form>
        </div>
    );
}

export default SignUp;
