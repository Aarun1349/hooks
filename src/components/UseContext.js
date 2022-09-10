import React from 'react'
import ChildForContext from './ChildForContext'
function UseContext() {

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

  

  return (
    <div className='container container-flex'>
    <div className='row'>
      <div className='col-md-12' style={{"textAlign":"center","marginTop":"2rem"}}>
        <h2>Use Context Example</h2>
      </div>
      <div className='col-md-12' style={hookBox}>
        
        <div className='row'>
          <div className='col-md-12'>
            <h1>UseContext Parent Component</h1>
            <ChildForContext/>
          </div>
        </div>
      </div>
      
      
    </div>
    
    
    </div>
  )
}

export default UseContext