import React from 'react'
import useLocalStorage from '../localHook/UseLocalStorage'

const AuthContextProvider = () => {
  const [authInfo,setAuthInfo] = useLocalStorage("s11g2Auth",{})

  let isLoggedIn = authInfo && authInfo.token;

  const initAuth = (authFormData) => {
    
  }

  return (
    <div>AuthContextProvider</div>
  )
}

export default AuthContextProvider