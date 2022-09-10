import React from "react";
import { useState } from "react";
function UseStateObject() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
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
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="container container-flex">
      <div className="row">
        <div
          className="col-md-12"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <h2>UseState Object Example</h2>
        </div>
        <div className="col-md-12" style={hookBox}>
          <h1>Login Form</h1>
          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    value={data.email}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    onChange={(e) => handleChange(e)}
                    value={data.password}
                    placeholder=""
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  Submit
                </button>
              </form>
              <h5 style={{ marginTop: "10px" }}>{`My email is ${data.email} and my password is ${data.password}`}</h5>
            </div>
          </div>
        </div>
        {/* <div className="col-md-12">
            {data.email}
        </div> */}
      </div>
    </div>
  );
}

export default UseStateObject;
