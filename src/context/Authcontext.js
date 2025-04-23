import { createContext, useContext, useState } from "react";

const Authcontext = createContext();

export const useAuth = ()=> useContext(Authcontext); // it is a custom hook that will be used in navbar

export const AuthProvider = ({children})=>{

    const [isLoggedIn, setisLoggedIn] = useState(false)

    useState(()=>{

        const token = localStorage.getItem('Authtoken');
        setisLoggedIn(!!token)
    },[]);
    

    const login = (token,user)=>{
        localStorage.setItem('Authtoken',token);
        localStorage.setItem('userdata',user);
        setisLoggedIn(true);
    }

    const logout = ()=>{
        localStorage.removeItem('Authtoken');
        setisLoggedIn(false);
    }

    return (
        <Authcontext.Provider value={{ isLoggedIn, login, logout }}>
          {children}
        </Authcontext.Provider>
      );
};