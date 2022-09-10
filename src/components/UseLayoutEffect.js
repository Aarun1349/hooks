import React from 'react'
import {useEffect,useLayoutEffect} from "react"
function UseLayoutEffect() {
  // const[num,setNum] = useState(0)
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
useEffect(()=>{
  console.log('First Use Effect')
},[])
useEffect(()=>{
  console.log('Second Use Effect')
},[])
useEffect(()=>{
  console.log('Third Use Effect')
},[])
useLayoutEffect(()=>{
console.log('Use Layout Effect')
},[])

  return (
    <div className='container container-flex'>
    <div className='row'>
      <div className='col-md-12' style={{"textAlign":"center","marginTop":"2rem"}}>
        <h2>Use UseLayoutEffect Example</h2>
      </div>
      <div className='col-md-12' style={hookBox}>
        
        <div className='row'>
          <div className='col-md-12'>
            <h6>UseLayoutEffect runs synchronously after the render but before screen is updated</h6>
            <p>UseEffect runs asynchronously and after a render is painted to the screen</p>
          </div>
          <div className='col-md-12'></div>
        </div>
      </div>
      
      
    </div>
    
    
    </div>
  )
}

export default UseLayoutEffect