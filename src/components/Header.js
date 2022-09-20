import { findNonSerializableValue } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const isActive = {
    textDecoration: "none",
    textColor: "black",
    fontSize: "40px",
    
  };

  const inActive = {
    textDecoration: "none",
    textColor: "black",
    fontSize: "30px",
  };


  const divActive = {
      marginTop:"28px"
  }

  const divInActive = {
    marginTop:"44px"
  }

  let location = useLocation().pathname;

  useEffect(() => {}, [location]);

  return (
    <div className="title-container">
      <div className="users-title">
        <h5>Users</h5>
      </div>
      <div className="header-vertical-line"></div>
      <div className="nav-bar">
        <div className="posts-title" style={location === "/posts" ? divActive : divInActive}>
          <NavLink
            to="/posts"
            style={location === "/posts" ? isActive : inActive}
          >
            <h5>Posts</h5>
          </NavLink>
        </div>
        <div className="todos-title" style={location === "/todos" ? divActive : divInActive}>
          <NavLink
            to="/todos"
            style={location === "/todos" ? isActive : inActive}
          >
            <h5>Todos</h5>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
