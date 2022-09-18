import { findNonSerializableValue } from "@reduxjs/toolkit";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div className="title-container">
      <div className="users-title">
        <h5>Users</h5>
      </div>
      <div className="header-horizontal-line"></div>
      <div className="posts-title">
            <Link to="/posts" style={linkStyle}>
              <h5>Posts</h5>
            </Link>
      </div>
      <div className="todos-title">
      <Link to="/todos" style={linkStyle} >
              <h5>Todos</h5>
            </Link>
      </div>
      
    </div>
  );
};

export default Header;
