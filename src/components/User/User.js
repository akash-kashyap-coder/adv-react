import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./User.css";
import { Link } from "react-router-dom";

export default function User({ user, IMAGE_URL, handleSetUser }) {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {}, [isSelected]);

  const handleIsSelected = () => {
    if(!isSelected){
      setIsSelected(!isSelected);
      handleSetUser(user.id);
    }
    else{
      setIsSelected(!isSelected);
      handleSetUser();
    }
  };
  return (
    <div
      className="user-card"
      onClick={() => {
        handleIsSelected();
      }}
      style={{ boxShadow: isSelected ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "" }}
    >
      <img className="user-card-image" src={IMAGE_URL} />
      <div className="user-card-body">
        <p className="user-card-name">{user.name}</p>
        <p className="user-card-username">{user.username}</p>
      </div>
    </div>
  );
}
