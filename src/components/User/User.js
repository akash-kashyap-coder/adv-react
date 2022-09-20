import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./User.css";
import { useSelector, useDispatch } from "react-redux";
export default function User({ user, IMAGE_URL, handleSetUser }) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {}, [isSelected]);

  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => {
    return state.userReducer;
  });
console.log(selectedUser);
  const handleIsSelected = () => {
    handleSetUser(user.id);
    dispatch({ type: "UPDATE_SELECTED_USER", payload: user.id });
  };
  return (
    <div
      className="user-card"
      onClick={() => {
        handleIsSelected();
      }}
      style={{
        boxShadow:
          selectedUser === user.id ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "",
      }}
    >
      <img className="user-card-image" src={IMAGE_URL} />
      <div className="user-card-body">
        <p className="user-card-name">{user.name}</p>
        <p className="user-card-username">{user.username}</p>
      </div>
    </div>
  );
}
