import React from "react";
import { useState,useRef,useEffect } from "react";
function UseRef() {
  // const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const count = useRef(0)
  console.log(count)
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
  const handleChange = (e) => {
    e.preventDefault();
    setInputVal(e.target.value);
  };
  useEffect(()=>{
    
    count.current = count.current+1
  })
  return (
    <div className="container container-flex">
      <div className="row">
        <div
          className="col-md-12"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <h2>UseRef Example</h2>
        </div>
        <div className="col-md-12" style={hookBox}>
          <div className="row">
            <div className="col-md-12">
              <h5>
                It create a mutable variable which will not re-render the
                components. It use to access the DOM element directly
              </h5>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              {" "}
              <input
                type="text"
                className="form-control"
                name="inputVal"
                onChange={(e) => handleChange(e)}
                value={inputVal}
              />
            </div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4">The count value is: {count.current}</div>
          <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseRef;
