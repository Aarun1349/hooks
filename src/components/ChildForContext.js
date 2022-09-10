import React from "react";
import { useContext } from "react";
import  {AppContext}  from "../context/ContextApi";
function ChildForContext() {
  const user = useContext(AppContext);
   console.log(user)
   const {name,age} = user;
  return <div>
    {`Child = 
  My name is ${name} and I am  ${age} year old`}
  </div>;
}

export default ChildForContext;
