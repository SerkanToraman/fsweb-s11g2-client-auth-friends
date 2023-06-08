import React, { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../contexts/AuthContext";

const Navtopbar = () => {

  const {isLoggedIn, logOut} = useContext(AuthContext);

  const { push } = useHistory();

  return (
  <div className="flex w-full my-8 ">
    <h1 className="text-6xl grow mr-20">FRIENDS DATABASE</h1>
    <nav className="flex items-center grow-0">
      {!isLoggedIn &&
    
          <button onClick={() => push("/login")} type="button" className='mx-3 px-10 rounded-2xl h-10 bg-black text-white text-base'>Login.</button>
      }
      {isLoggedIn &&<>
          <button onClick={() => push("/friends")} type="button" className='mx-3 px-10 rounded-2xl h-10 bg-black text-white text-base'>FriendList.</button>

          <button type="button" className='mx-3 px-10  rounded-2xl h-10 bg-black text-white text-base'>AddFriend</button>
      
          <button onClick={()=>{logOut();push("/login")}} type="button" className='mx-3 px-10  rounded-2xl h-10 bg-black text-white text-base'>Logout</button> 
      </>
      }
    </nav>
</div>

  )
}

export default Navtopbar;