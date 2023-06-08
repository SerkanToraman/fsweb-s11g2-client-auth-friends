import { createContext, useEffect } from "react";
import React, {useState} from "react";
//import axios from "axios";
import axiosWithAuth from "../endpoints/AxiosAuth";
import useLocalStorage from "../localHook/UseLocalStorage";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  
   const [loginData,setLoginData]= useLocalStorage("friends",{});

   let isLoggedIn = loginData && loginData.token;
  
   
   
   // this Context goes to LoginForm 
   const loginHandleSubmitContext = (user)=>{
     //axiosWithAuth creates the baseURL
       axiosWithAuth()
     .post("/api/login", user)
     .then((res) => {
       res.data && setLoginData(res.data);
      })
      .catch((err) => window.alert(`Dikkat!! "${err.message}" hatası.. Tekrar deneyin.`));
    }

    const logOut = () => {
      //console.log("logout");
      setLoginData({});
    };
    
    return (
      <AuthContext.Provider value={{ loginHandleSubmitContext,isLoggedIn,logOut,loginData }}>
      {children}
    </AuthContext.Provider>
  );
  }

  export default AuthContextProvider;
