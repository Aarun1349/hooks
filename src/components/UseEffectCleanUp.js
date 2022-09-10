import React from "react";
import { useState, useEffect } from "react";
function UseEffectCleanUp() {
  const [dimension, setDimension] = useState(window.screen.width);
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
const currentScreenWidth =()=>{
    setDimension(()=>  window.innerWidth)
}
  // 3. Props or State Values dependency
  useEffect(() => {
    // document.title = `React Hook ${count}`;
    // window.screen.dimension
    window.addEventListener('resize',currentScreenWidth)

    //clean up function
    return (()=>{
        window.removeEventListener('resize',currentScreenWidth)
    })
  },[dimension]);

//   const handleClick = (e) => {
//     e.preventDefault();
//     if (e.target.id === "sub") {
//       count === 0 ? setCount(0) : setCount(count - 1);
//     } else {
//       setCount(count + 1);
//     }
//   };

  return (
    <div className="container container-flex">
      <div className="row">
        <div
          className="col-md-12"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <h2>UseEffect Clean Up Example</h2>
        </div>
        <div className="col-md-12" style={hookBox}>
          <div className="row">
            <div className="col-md-12">
              <h1>{` The screen resolution is ${dimension}`}</h1>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseEffectCleanUp;
