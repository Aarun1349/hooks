import React from "react";
import { useState, useCallback } from "react";
import Todos from "./Todos";
function UseCallback() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const hookBox = {
    textAlign: "center",
    marginTop: "2rem",
    padding: "5px",
    border: "1px solid",
    minHeight: "60vh",
    borderRadius: "5px",
    backgroundColor: "#0F3460",
    color: "#E1FFEE",
  };
  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    // console.log(todos);
    return setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  return (
    <div className="container container-flex">
      <div className="row">
        <div
          className="col-md-12"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <h2>Use Callback Example</h2>
        </div>
        <div className="col-md-12" style={hookBox}>
          <div className="row">
            <div className="col-md-12">
              <h1>My Todos</h1>
            </div>
            <div className="col-md-12">
              <Todos todos={todos} addTodo={addTodo} />
              <hr />
            </div>
            <div className="col-md-12">
              <h3>Count : {count}</h3>
              <button className="btn btn-primary" onClick={increment}>
                INC
              </button>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseCallback;
