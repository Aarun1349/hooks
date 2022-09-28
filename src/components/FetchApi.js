import React,{useState,useEffect} from 'react'
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
const url = "https://jsonplaceholder.typicode.com/users/1";
function FetchApi() {
    const [userData,setUserData] = useState({})
    const apiCall = async()=>{
        const response = await fetch(url);
       setUserData(await response.json())

    }

    useEffect(()=>{
        apiCall();
    },[])


  return (
    <div className='container container-flex'>
    <div className='row'>
      <div className='col-md-12' style={{"textAlign":"center","marginTop":"2rem"}}>
        <h2>Fetch Api  Example</h2>
      </div>
      <div className='col-md-12' style={hookBox}>
        <h2>Fetch Api Example</h2>
        <div className='row' style={{"marginTop":"10px"}}>
          <div className='col-md-12'>
          <div className="App">
      <h2>User Data</h2>
      <p>
        <strong>Name: </strong>
        {userData.name || "(Need to populate name here)"}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || "(Need to populate website here)"}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || "(Need to populate email here)"}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || "(Need to populate phone here)"}
      </p>
    </div>
          </div>
        </div>
      </div>
      
      
    </div>
    
    
    </div>
  )
}

export default FetchApi