import React, { useContext, useEffect, useState } from 'react';
import { auth } from './Firebase'; // Import Firebase authentication

const AuthContext = React.createContext();

export function useAuth() {
    useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    async function logout() {
        try {
        await auth.signOut();
        } catch (error) {
        console.error('Error logging out:', error.message);
        }
    }

    const value = {
        currentUser,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
