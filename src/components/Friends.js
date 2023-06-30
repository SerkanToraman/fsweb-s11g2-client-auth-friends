import React, { useContext, useEffect, useState } from 'react';
import axiosWithAuth from '../endpoints/AxiosAuth';
import { AuthContext } from '../contexts/AuthContext';

function Friends() {

  const [friendsList,setFriendsList] = useState([]);
  const { loginData }= useContext(AuthContext);
 
  //console.log("loginDatafriends",loginData);

  
  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends", {
        headers: {
          authorization:loginData.token,
        },
      })
      .then((res) => setFriendsList(res.data))
      .catch((err) => console.log(err));
      //console.log("token",loginData.token)
  }, []);

  console.log("friendsList",friendsList);

  return (
    <div className="flex flex-col items-center my-6 md:my-12">
      <p className='text-4xl md:text-8xl font-bold text-center'>FRIENDS LIST</p>
      <div>
        {friendsList.map((item,index) => 
          <div className="text-lg md:text-4xl my-6 font-semibold" key={index}>-{item.name} - {item.email}</div>
        )}
      </div>
    </div>

    )
}

export default Friends