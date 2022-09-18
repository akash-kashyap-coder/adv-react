import "./App.css";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Users from "./components/User/Users";
import Posts from "./components/Post/Posts";
import Todos from "./components/Todo/Todos";

function App() {
  const [userId, setUserId] = useState();
  const [posts, setPosts] = useState([]);
  const [todos,setTodos] = useState([]);

  const POSTS_URL = "https://jsonplaceholder.typicode.com/posts?userId=";
  const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos?userId=';
  let IMAGE_URL = "https://api.lorem.space/image/watch?w=332&h=188&val=";

  useEffect(() => {
    axios.get(POSTS_URL + userId).then((res) => setPosts(res.data));
    axios.get(TODOS_URL+userId).then((res)=> setTodos(res.data));
    IMAGE_URL = "https://api.lorem.space/image/watch?w=332&h=188&val=" + userId;
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
        <div className="container">
          <div className="users">
            <Users handleSetUser={handleSetUser}></Users>
          </div>
          <div className="vertical-line"></div>
          <Routes>
            <Route path="/" element={<Navigate replace to="/posts"/>}/>
            <Route
              path="/posts"
              element={
                <Posts className="posts" posts={posts} userId={userId}></Posts>
              }
            />
            <Route path="/todos" 
            element={
            <Todos className='todos' todos={todos} userId={userId}></Todos>
            }
             />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
