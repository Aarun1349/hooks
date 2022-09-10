import React from 'react'
import {useState} from "react"
function UseState() {
  const[count,setCount] = useState(0)
  const hookBox ={
    "textAlign":"center",
    "marginTop":"2rem",
    "padding":"5px",
    "border":"1px solid",
    "minHeight":"60vh",
    "borderRadius":"10px",
    "backgroundColor":"#0F3460",
    "color":"#E1FFEE"
  }
  const handleClick=(e)=>{
    e.preventDefault()
    if(e.target.id ==='sub')
    {
      (count ===0)?setCount(0):setCount(count-1)
    }
    else{
      setCount(count+1)
    }
  }
  return (
    <div className='container container-flex'>
    <div className='row'>
      <div className='col-md-12' style={{"textAlign":"center","marginTop":"2rem"}}>
        <h2>Use State Example</h2>
      </div>
      <div className='col-md-12' style={hookBox}>
        <h2>Use State Example</h2>
        <div className='row' style={{"marginTop":"10px"}}>
          <div className='col-md-12'>
            <h1>{count}</h1>
          </div>
          <div className='col-md-4'>
          <button className='btn btn-sm btn-success' id="add" onClick={(e)=>{
            handleClick(e)
          }}>Add</button>
          </div>
          <div className='col-md-4'>
           
          </div>
          <div className='col-md-4'>
          <button className='btn btn-sm btn-danger' id="sub" onClick={(e)=>{
            handleClick(e)
          }}>Sub</button>
          </div>
        </div>
      </div>
      
      
    </div>
    
    
    </div>
  )
}

export default UseState