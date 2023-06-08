import React, { useContext, useEffect, useState } from 'react';
import axiosWithAuth from '../endpoints/AxiosAuth';
import { AuthContext } from '../contexts/AuthContext';

function Friends() {

  const [friendsList,setFriendsList] = useState([]);
  const { loginData }= useContext(AuthContext);
 
  console.log("loginDatafriends",loginData);

  
  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends", {
        headers: {
          authorization:loginData.token,
        },
      })
      .then((res) => setFriendsList(res.data))
      .catch((err) => console.log(err));
      console.log("token",loginData.token)
  }, []);

  console.log("friendsList",friendsList);

  return (
    <>
    {friendsList.map((item,index) => 
      <div key={index}>{item.name}</div>
    )}
    </>

    )
}

export default Friends