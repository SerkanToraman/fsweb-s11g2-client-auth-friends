import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../contexts/AuthContext";

const Navtopbar = () => {

  const {isLoggedIn, logOut} = useContext(AuthContext);

  const { push } = useHistory();
  useEffect(()=>{
    console.log("isLoggedIn",isLoggedIn);
  },[isLoggedIn]) ;

  return (
  <div className="flex my-8 ">
    <h1 className="text-6xl grow mr-20">FRIENDS DATABASE</h1>
    <nav className="flex items-center grow-0">
      {!isLoggedIn &&
    
          <button onClick={() => push("/login")} type="button" className='mx-3 px-10 rounded-2xl h-10 bg-black text-white text-base hover:bg-white hover:text-black hover:bg-white hover:border-black hover:border-2'>Login.</button>
      }
      {isLoggedIn &&<>
          <button onClick={() => push("/friends")} type="button" className='mx-3 px-10 rounded-2xl h-10 bg-black text-white text-base hover:bg-white hover:text-black hover:bg-white hover:border-black hover:border-2'>FriendList.</button>

          <button onClick={() => push("/friends/add")} type="button" className='mx-3 px-10  rounded-2xl h-10 bg-black text-white text-base hover:bg-white hover:text-black hover:bg-white hover:border-black hover:border-2'>AddFriend</button>
      
          <button onClick={()=>{logOut();push("/login")}} type="button" className='mx-3 px-10  rounded-2xl h-10 bg-black text-white text-base hover:bg-white hover:text-black hover:bg-white hover:border-black hover:border-2'>Logout</button> 
      </>
      }
    </nav>
</div>

  )
}

export default Navtopbar;