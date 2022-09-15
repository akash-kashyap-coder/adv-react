import React from "react";
import User from "./User";
import axios from "axios";
import { useState, useEffect } from "react";
import './Users.css';
export default function Users({handleSetUser}) {
  const [usersData, setUsersData] = useState([]);
  
  const USERS_URL = "https://jsonplaceholder.typicode.com/users";
  const IMAGE_URL = 'https://api.lorem.space/image/face?w=50&h=50&val=';
  useEffect(() => {
    axios.get(USERS_URL).then((response) =>setUsersData(response.data))
  }, []);
  let count = 0;
  const counter = () =>{
    return count++;
  }
  return (
    <div className="users-flex"> 
      
      
      <div className="selected-div">
        {usersData.map((user) => (
          <User
            key={user.id}
            user={user}
            IMAGE_URL={IMAGE_URL+counter()} 
            handleSetUser={handleSetUser}   
          />
        ))}
      </div>
    </div>
  );
}
