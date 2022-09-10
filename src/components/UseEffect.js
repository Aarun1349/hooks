import React from "react";
import { useState, useEffect } from "react";
function UseEffect() {
  const [count, setCount] = useState(0);
  const hookBox = {
    textAlign: "center",
    marginTop: "2rem",
    padding: "5px",
    border: "1px solid",
    minHeight: "60vh",
    borderRadius: "10px",
    backgroundColor: "#0F3460",
    color: "#E1FFEE",
  };
  // 1. No dependency passed
  // useEffect(() => {
  //   document.title = `React Hook ${count}`;
  // });

 // 2. An empty array
  // useEffect(() => {
  //   document.title = `React Hook ${count}`;
  // },[]);

  // 3. Props or State Values dependency
  useEffect(() => {
    document.title = `React Hook ${count}`;
  },[count]);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === "sub") {
      count === 0 ? setCount(0) : setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="container container-flex">
      <div className="row">
        <div
          className="col-md-12"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <h2>Use Effect Example</h2>
        </div>
        <div className="col-md-12" style={hookBox}>
          <div className="row">
            <div className="col-md-12">
              <h1>{count}</h1>
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-sm btn-success"
                id="add"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Add
              </button>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <button
                className="btn btn-sm btn-danger"
                id="sub"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Sub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseEffect;
