import React, { useEffect } from "react";
import Todo from "./Todo";
import "./Todos.css";
import axios from "axios";
import { useState } from "react";
const Todos = ({ todos, userId, TODOS_URL }) => {
  TODOS_URL = "https://jsonplaceholder.typicode.com/todos?userId=";

  const [todoStatus, setTodoStatus] = useState();
  const [userTodos, setUserTodos] = useState([todos]);

  const handleCompletedClick = () => {
    setTodoStatus(true);
  };
  const handleInProgressClick = () => {
    setTodoStatus(false);
  };

  useEffect(() => {
    axios
      .get(TODOS_URL + userId + "&completed=" + todoStatus)
      .then((res) => setUserTodos(res.data));
  }, [todoStatus]);
  return (
    <div className="todos-flex">
      <div className="lines"></div>
      {todos.length == 0 ? (
        <div className="no-users">
          <p className="todos-no-todos">No User selected</p>
        </div>
      ) : (
        <div>
          <div className="todos-header">
            <div className="todos-completed">
              <button onClick={handleCompletedClick}>Completed</button>
            </div>
            <div className="todos-in-progress">
              <button onClick={handleInProgressClick}>In Progress</button>
            </div>
            <div className="todos-search">
              <input type="search" placeholder="Search" />
            </div>
          </div>
          <div className="each-todo">
            {todoStatus === undefined
              ? todos.map((todo) => (
                  <Todo todo={todo} key={todo.id} className="todo-col" />
                ))
              : userTodos.map((todo) => (
                  <Todo todo={todo} key={todo.id} className="todo-col" />
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Todos;
