import React from "react";
import "./Todo.css";

const Todo = ({ todo }) => {
 
  

  return (
    <div className="todo-card-container">
      <div className="todo-header-container">
        <div className="todo-id">
          {todo.id}
        </div>
        <div className="todo-status-button">
          {todo.completed ? <button style={{backgroundColor:'#76EF7A'}}>Completed</button>:<button style={{backgroundColor:'#AAC7FE'}}>In Progress</button>}
        </div>
      </div>
      <div className="todo-title">
          {todo.title.toString()}
      </div>
    </div>
  );
  };

export default Todo;
