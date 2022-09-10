import React from "react";
import { useState ,useMemo} from "react";
function UseMemo() {
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(false);
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
  const getValue = () => {
    return setNum(num + 1);
  };
  const countNumber = (num) => {
    console.log("num", num);
    for (let i = 0; i <= 100000000; i++) {}
    return num;
  };

  const CheckData =useMemo(() => {
    return countNumber(num);
  },[num]);
  return (
    <div className="container container-flex">
      <div className="row">
        <div
          className="col-md-12"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <h2>Use Memo Example</h2>
        </div>
        <div className="col-md-12" style={hookBox}>
          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-lg btn-danger" onClick={getValue}>
                Counter
              </button>
            </div>
            <div className="col-md-12">
              <p>My new Number : {CheckData}</p>
            </div>
          </div>
          <div className="col-md-12">
            <button
              className="btn btn-lg btn-danger"
              onClick={() => setShow(!show)}
            >
              {show ? "You Clicked Me" : "Click Me Please"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseMemo;
