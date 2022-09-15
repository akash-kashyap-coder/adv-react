import Users from "./components//User/Users";

import "./App.css";
import Posts from "./components/Post/Posts";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [userId, setUserId] = useState();
  const [posts, setPosts] = useState([]);
  const POSTS_URL = "https://jsonplaceholder.typicode.com/posts?userId=";

  useEffect(() => {
    axios.get(POSTS_URL + userId).then((res) => setPosts(res.data));
  }, [userId]);

  const handleSetUser = (userId) => {
    setUserId(userId);
  };

  return (
    <Router>
      <div className="main-container">
        <div>
          <Header />
        </div>
        <div className="horizontal-line"></div>

        
      </div>
      <Routes>
        <Route path="/post"></Route>
      </Routes>
    </Router>
  );
}

export default App;
