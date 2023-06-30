import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../contexts/AuthContext";

const Navtopbar = () => {

  const {isLoggedIn, logOut} = useContext(AuthContext);

  const { push } = useHistory();
  useEffect(()=>{
    console.log("isLoggedIn",isLoggedIn);
  },[isLoggedIn]) ;

  const button = 'w-20 md:w-32 rounded-2xl h-8 md:h-10 bg-black text-white text-[0.6rem] md:text-[1rem] hover:bg-white hover:text-black hover:bg-white hover:border-black hover:border-2'

  return (
  <div className="h-24 flex my-8 justify-between">
    <h1 className="flex items-center text-4xl font-bold  md:text-6xl">FRIENDS DATABASE</h1>
    <nav className="flex flex-col gap-2 md:flex-row items-center">
      {!isLoggedIn &&
    
          <button onClick={() => push("/login")} type="button" className={button}>Login.</button>
      }
      {isLoggedIn &&<>
          <button onClick={() => push("/friends")} type="button" className={button}>FriendList.</button>

          <button onClick={() => push("/friends/add")} type="button" className={button}>AddFriend</button>
      
          <button onClick={()=>{logOut();push("/login")}} type="button" className={button}>Logout</button> 
      </>
      }
    </nav>
</div>

  )
}

export default Navtopbar;