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
  const label = " text-xl md:text-2xl font-extrabold";
  const input = "bg-black text-xl md:text-2xl text-white h-10 md:h-12 px-2 w-[20rem] md:w-[32rem]"


  return (
    <div className="flex flex-col items-center my-6 md:my-12">
      <h1 className="text-4xl md:text-6xl font-bold">Add Friend</h1>
      <form  className="flex flex-col" onSubmit={handleSubmit(addNewFriendSubmit)}>
      
          <label id="name-label" className={label} htmlFor="title">
            Name:
          </label>
            <input
              className={input}
              type="text"
              placeholder="name"
              {...register("name", { required: "Please enter a name" })}
            />
            {errors?.name && <p>{errors.name.message}</p>}
      
          <label id="email-label" className={label}  htmlFor="title">
            E-mail:
          </label>
          <input
            className={input}
            type="email"
            placeholder="email"
            {...register("email", {
              required: "Please enter a valid e-mail.",
            })}
          />
        {errors?.email && <p>{errors.email.message}</p>}
          <label id="age-label" className={label}  htmlFor="title">
            Age:
          </label>
          <input
           className={input}
            type="number"
            placeholder="age"
            {...register("age", {
              required: "Please enter an age",
            })}
          />
        {errors?.age && <p>{errors.age.message}</p>}
        <button type="submit" className="my-6 w-40 md:w-80 rounded-2xl h-10 md:h-14 bg-black text-white  text-xl md:text-2xl mx-auto">Add Friend</button>
      </form>
    </div>
  )
}

export default Addfriend;