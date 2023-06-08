import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
//import axios from "axios";
import axiosWithAuth from "../endpoints/AxiosAuth";

function Addfriend() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange",
  defaultValues : {
    name:"",
    age:"",
    email:""
  }
   });
  const { loginData }= useContext(AuthContext);
  const history = useHistory();

  

  const addNewFriendSubmit = (data) => {
    console.log("data",data)
    axiosWithAuth()
      .post("/api/friends/",data,
      {headers: {
        authorization:loginData.token,
      },
    })
      .then((res)=>{
        history.push("/friends")
      })
      .catch((err) =>{
        window.alert(`Warning!! "${err.error}" error.. Please check and re-enter the info.`)
      }
       
      );

  }



  return (
    <div id="loginFormMainDiv" className="flex items-center flex-col">
      <h1 className="text-8xl font-bold mb-6 text-center">Add Friend</h1>
      <form  className="flex items-center flex-col" onSubmit={handleSubmit(addNewFriendSubmit)}>
        <div className="flex gap-1 items-center">
          <label id="name-label" className = "text-4xl my-6 font-semibold text-left w-28 mr-4" htmlFor="title">
            Name:
          </label>
            <input
              className="text-white bg-black box-border h-10 w-80 p-4 border-2"
              type="text"
              placeholder="name"
              {...register("name", { required: "Please enter a name" })}
            />
          </div>
            {errors?.name && <p>{errors.name.message}</p>}
        
        <div className="flex gap-1 items-center flex-wrap">
          <label id="email-label" className = "text-4xl my-6 font-semibold text-left w-28 mr-4" htmlFor="title">
            E-mail:
          </label>
          <input
            className="ext-2xl text-white bg-black box-border h-10 w-80 p-4 border-2"
            type="email"
            placeholder="email"
            {...register("email", {
              required: "Please enter a valid e-mail.",
            })}
          />
        </div>
        {errors?.email && <p>{errors.email.message}</p>}
        <div className="flex gap-1 items-center flex-wrap" >
          <label id="age-label" className = "text-4xl my-6 font-semibold text-left w-28 mr-4" htmlFor="title">
            Age:
          </label>
          <input
          className="text-white bg-black box-border h-10 w-80 p-4 border-2"
            type="number"
            placeholder="age"
            {...register("age", {
              required: "Please enter an age",
            })}
          />
        </div>
        {errors?.age && <p>{errors.age.message}</p>}
        <button type="submit" className="my-6 mx-auto px-10 rounded-2xl h-14 bg-black text-white  text-2xl w-60">Add Friend</button>
      </form>
    </div>
  )
}

export default Addfriend;