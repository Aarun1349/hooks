import React from "react";
import {  useRef } from "react";
function UseRef1() {
  //   const[count,setCount] = useState(0)
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
  const inputRef = useRef()
  const changeBorder =()=>{
    console.log('clicked')
    inputRef.current.focus();
    inputRef.current.backgroundColor="#82e0aa";
  }

  return (
    <div className="container container-flex">
      <div className="row">
        <div
          className="col-md-12"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <h2>UseRef One Example</h2>
        </div>
        <div className="col-md-12" >
          <div className="row">
            <div className="col-md-12">
              <h1></h1>
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
                  <input className="form-control" ref={inputRef} type="text" />
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <br/>
                  <button className="btn btn-lg"  onClick={changeBorder} >
                    Change 
                  </button>
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseRef1;
