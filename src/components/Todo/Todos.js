import React, { useEffect } from "react";
import Todo from "./Todo";
import "./Todos.css";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Todos = ({ todos, userId, TODOS_URL }) => {
  TODOS_URL = "https://jsonplaceholder.typicode.com/todos?userId=";

  const [todoStatus, setTodoStatus] = useState();
  const [userTodos, setUserTodos] = useState([todos]);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const { completedSelected, inProgressSelected } = useSelector((state) => {
    return state.todoStatusReducer;
  });

  const borderSolid = {
    border: "2px solid black",
  };

  const border = {
    border: "1px solid black",
  };

  const handleCompletedClick = () => {
    if(todoStatus===undefined){
      setTodoStatus(true);
      dispatch({
      type: "UPDATE_TODO_STATUS_FILTER",
      payload: { completedSelected: true, inProgressSelected: false },
    });
    }
    else{
      setTodoStatus();
      dispatch({
      type: "UPDATE_TODO_STATUS_FILTER",
      payload: { completedSelected: false, inProgressSelected: false },
    });
    }
  };
  const handleInProgressClick = () => {
    if(todoStatus===undefined){
      setTodoStatus(false);
       dispatch({
      type: "UPDATE_TODO_STATUS_FILTER",
      payload: { completedSelected: false, inProgressSelected: true },
    });
    }
    else{
      setTodoStatus();
      dispatch({
     type: "UPDATE_TODO_STATUS_FILTER",
     payload: { completedSelected: false, inProgressSelected: false },
   });
    }
  };

  useEffect(() => {
    if (todoStatus === undefined) {
      axios
        .get(TODOS_URL + userId)
        .then((res) => setUserTodos(res.data.slice(0, 5)));
    } else {
      axios
        .get(TODOS_URL + userId + "&completed=" + todoStatus)
        .then((res) => setUserTodos(res.data.slice(0, 5)));
    }
  }, [todoStatus]);

  console.log(todoStatus);
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
              <button
                onClick={handleCompletedClick}
                style={completedSelected ? borderSolid : border}
              >
                Completed
              </button>
            </div>
            <div className="todos-in-progress">
              <button
                onClick={handleInProgressClick}
                style={inProgressSelected ? borderSolid : border}
              >
                In Progress
              </button>
            </div>
            <div className="todos-search">
              <input
                type="search"
                placeholder="Search"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="each-todo">
            {todoStatus === undefined
              ? todos
                  .filter((value) => {
                    if (searchTerm == "") {
                      return value;
                    } else if (
                      value.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((todo) => (
                    <Todo todo={todo} key={todo.id} className="todo-col" />
                  ))
              : userTodos
                  .filter((value) => {
                    if (searchTerm == "") {
                      return value;
                    } else if (
                      value.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((todo) => (
                    <Todo todo={todo} key={todo.id} className="todo-col" />
                  ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Todos;
