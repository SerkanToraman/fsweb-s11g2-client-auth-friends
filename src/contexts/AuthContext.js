import { createContext, useEffect } from "react";
import React, {useState} from "react";
//import axios from "axios";
import axiosWithAuth from "../endpoints/AxiosAuth";
import useLocalStorage from "../localHook/UseLocalStorage";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  
  const [isLoggedIn,setIsLoggedIn] = useState(false);

   const [loginData,setLoginData]= useLocalStorage("friends",{});
  
   
   
   // this Context goes to LoginForm 
   const loginHandleSubmitContext = (user)=>{
     //axiosWithAuth creates the baseURL
       axiosWithAuth()
     .post("/api/login", user)
     .then((res) => {
       setIsLoggedIn(true);
       res.data && setLoginData(res.data);
      })
      .catch((err) => window.alert(`Dikkat!! "${err.message}" hatası.. Tekrar deneyin.`));
      setIsLoggedIn(false);
    }

    const logOut = () => {
      console.log("logout");
      setLoginData({});
      setIsLoggedIn(false);
    };
    
    return (
      <AuthContext.Provider value={{ isLoggedIn,,logOut,loginData }}>
      {children}
    </AuthContext.Provider>
  );
  }

  export default AuthContextProvider;
