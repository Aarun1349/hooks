import React from 'react'
import {useReducer} from "react"
import reducer from '../reducer/reducer'
function UseReducer() {
  // const[count,setCount] = useState(0)
  const initialValue = 0
  const[count,dispatch] =  useReducer(reducer ,initialValue)
  const hookBox ={
    "textAlign":"center",
    "marginTop":"2rem",
    "padding":"5px",
    "border":"1px solid",
    "minHeight":"60vh",
    "borderRadius":"5px",
    "backgroundColor": "#0F3460",
    "color": "#E1FFEE",

  }
  // const handleClick=(e)=>{
  //   e.preventDefault()
  //   if(e.target.id ==='sub')
  //   {
  //     (count ===0)?setCount(0):setCount(count-1)
  //   }
  //   else{
  //     setCount(count+1)
  //   }
  // }
  const arOBj = [
    {
      id: "1",
      name: "name1"
    },
    {
      id: "2",
      name: "name2"
    },
    {
      id: "3",
      name: "name3"
    }
  ];

  let newArray = arOBj.map((obj,index) => {
    if (obj.id === "2") {
      obj.name = "Arun";
    }
    // console.log(obj,index)
    return obj;
  });
  console.log(newArray)

  return (
    <div className='container container-flex'>
    <div className='row'>
      <div className='col-md-12' style={{"textAlign":"center","marginTop":"2rem"}}>
        <h2>Use Reducer Example</h2>
      </div>
      <div className='col-md-12' style={hookBox}>
        <h2>Use Reducer Example</h2>
        <div className='row' style={{"marginTop":"10px"}}>
          <div className='col-md-12'>
            <h1>{count}</h1>
          </div>
          <div className='col-md-4'>
          <button className='btn btn-sm btn-success' id="add" onClick={()=>{dispatch({type:"INC"})}}>Add</button>
          </div>
          <div className='col-md-4'>
           
          </div>
          <div className='col-md-4'>
          <button className='btn btn-sm btn-danger' id="sub" onClick={()=>{dispatch({type:"DEC"})}}>Sub</button>
          </div>
        </div>
      </div>
      
      
    </div>
    
    
    </div>
  )
}

export default UseReducer