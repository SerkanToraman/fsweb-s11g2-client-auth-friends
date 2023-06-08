import React, { useContext, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import styled from 'styled-components';

// const Main  = styled.div`
// width:55rem;
// margin:4rem auto 4rem;
// `

const Loginform = () =>{

    const [user, setUser] = useState({
        username: "workintech",
        password: "wecandoit",
    });

    const {loginHandleSubmitContext,isLoggedIn} = useContext(AuthContext);
    const { push }= useHistory();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
        console.log("user",user);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loginHandleSubmitContext(user);   
    }
    useEffect(()=>{
      if(isLoggedIn){
        push('/friends')
      }
    },[isLoggedIn])



  return(
    <div className="w-6/12 mx-auto my-12">
        <h1 className="text-8xl font-extrabold text-center">LOGIN</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="text-2xl font-extrabold text-left">Name:</label>
            <input className=" bg-black text-2xl text-white h-12 px-2"
            type = "text"
            name = "username"
            value = {user.username}
            onChange ={handleChange}
            ></input>
            <label className="text-2xl text-1xl font-extrabold text-left px-2">Password:</label>
            <input className="bg-black text-white text-2xl h-12 px-2"
            type = "text"
            name = "password"
            value = {user.password}
            onChange ={handleChange}
            ></input>
            <button className='my-6 mx-auto px-10 rounded-2xl h-14 bg-black text-white  text-2xl w-60 '>Submit</button>
        </form>
    </div>
  
  )
}

export default Loginform;