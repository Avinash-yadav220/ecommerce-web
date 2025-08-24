import React, { createContext, use, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const decoded = jwtDecode(token);
                 setUser(decoded)
            } catch (err) {
                localStorage.removeItem('token')
            }
        }
    }, [])


    const login=()=>{
        const token=localStorage.getItem('token')
        const DecodedUser=jwtDecode(token)
        setUser(DecodedUser)
    }

    const logout=()=>{
            localStorage.removeItem('token')
            setUser(null);
        }


        return(
         <AuthContext.Provider value={{user,login,logout}}>
            {children}
         </AuthContext.Provider>
        )
}