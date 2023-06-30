import React, { useContext, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

//import styled from 'styled-components';

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
    <div className=" my-6 md:my-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-8xl font-extrabold ">LOGIN</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="text-xl md:text-2xl font-extrabold text-left">Name:</label>
            <input className= "bg-black text-xl md:text-2xl text-white h-10 md:h-12 px-2 w-[20rem] md:w-[32rem]"
            type = "text"
            name = "username"
            value = {user.username}
            onChange ={handleChange}
            ></input>
            <label className="text-xl md:text-2xl font-extrabold text-left">Password:</label>
            <input className="bg-black text-xl md:text-2xl text-white h-10 md:h-12 px-2 w-[20rem] md:w-[32rem]"
            type = "text"
            name = "password"
            value = {user.password}
            onChange ={handleChange}
            ></input>
            <button className='my-6 w-40 md:w-80 rounded-2xl h-10 md:h-14 bg-black text-white  ext-xl md:text-2xl mx-auto '>Submit</button>
        </form>
    </div>
  
  )
}

export default Loginform;