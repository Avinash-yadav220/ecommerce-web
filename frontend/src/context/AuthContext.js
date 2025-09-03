import React, { createContext, useEffect, useState } from "react";
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


    const login = async (token) => {
        return new Promise((resolve) => {
            localStorage.setItem('token', token);
            const decodedUser = jwtDecode(token);
            setUser(decodedUser);
            resolve();
        });
    };
    const logout=(navigate)=>{
            localStorage.removeItem('token')
            setUser(null);
            if(navigate){

                navigate('/login')
            }

        }


        return(
         <AuthContext.Provider value={{user,login,logout}}>
            {children}
         </AuthContext.Provider>
        )
}