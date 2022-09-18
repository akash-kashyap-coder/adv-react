import React from "react";
import "./Todo.css";

const Todo = ({ todo }) => {
 
  

  return (
    <div className="todo-card-container">
      <div className="todo-header">
        <div className="todo-id">
          <h3>{todo.id}</h3>
        </div>
        <div className="todo-status-button">
          {todo.completed ? <button style={{backgroundColor:'#76EF7A'}}>Completed</button>:<button style={{backgroundColor:'#AAC7FE'}}>In Progress</button>}
        </div>
      </div>
      <div className="todo-title">
        <h1>
          {todo.title.toString().trim().split(/ +/).join(" ").slice(0, 20)}
        </h1>
      </div>
    </div>
  );
  };

export default Todo;
