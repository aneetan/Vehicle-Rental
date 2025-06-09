import { onAuthStateChanged, type User } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { auth } from "../../firebase/firebase";

interface AuthContextType{
    currentUser: User | null;
    isLoggedIn: boolean,
    loading: boolean
}

// Create context with default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(){
    return useContext(AuthContext);
}

interface AuthProviderProps{
    children: ReactNode
}


export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    //states to preserve
    const [currentUser, setCurrentUser] = useState <User | null> (null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return () => unsubscribe();
    }, [])

    const initializeUser = (user: User | null) => {
        if(user){
            setCurrentUser({...user});
            setIsLoggedIn(true);
        } else {
            setCurrentUser(null);
            setIsLoggedIn(false);
        }
        setLoading(false);
    }

    const value: AuthContextType = {
        currentUser,
        isLoggedIn,
        loading
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}