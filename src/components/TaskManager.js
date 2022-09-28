import React, { useState } from "react";

function TaskManager() {
  const task = [
    {
      id: new Date().getMilliseconds(),
      status: "default",
      name: "task One",
    },
  ];
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState(task);

  const handleChange = (e) => {
    e.preventDefault();
    setInputTask(e.target.value);
    // console.log("handle Change clicked");
  };
  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: new Date().getMilliseconds(),
      status: "default",
      name: inputTask,
    };
    setTasks([...tasks, newTask]);
    setInputTask({})
    console.log(inputTask)
  };
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <form
            className="form d-flex"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <input
              type="text"
              className="form-control"
              style={{ borderRadius: "0" }}
              onChange={(e) => handleChange(e)}
              placeholder="Add New Task ✍️"
            ></input>
            <button className="btn btn-primary" style={{ borderRadius: "0" }} onClick={(e)=>{addNewTask(e)}}>
              Add🎯
            </button>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row" style={{ marginTop: "5rem" }}>
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <div
              className="card-header"
              style={{ backgroundColor: "Green", color: "white" }}
            >
              In Progress
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <div
              className="card-header"
              style={{ backgroundColor: "Blue", color: "white" }}
            >
              New Tasks
            </div>
            <ul className="list-group list-group-flush">
              {tasks.map((task, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {task.name}
                  </li>
                );
              })}
              {/* <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li> */}
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <div
              className="card-header"
              style={{ backgroundColor: "Red", color: "white" }}
            >
              Completed
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
