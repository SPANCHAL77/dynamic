import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const [dropdown,setDropdown]=useState();
  const [dropdown1,setDropdown1]=useState();
  const [dropdown2,setDropdown2]=useState();
  const [dropdown3,setDropdown3]=useState();
  const history= useNavigate();

  const handleForm =(e)=>{
    e.preventDefault();
}


const handleSubmit=()=>{
      axios.post('  http://localhost:8000/menus',{
        dropdown:dropdown,
        drop: {
          dropdown1:dropdown1,
          dropdown2:dropdown2,
          dropdown3:dropdown3,
        }
             
          }
      ).then(()=>{
          history("/read")
      })
     }

  return (
    <div>
       <h1>Add Dropdown</h1>
      <form onSubmit={handleForm}>

  <div>
    <label>Dropdown </label><br></br>
    <input  type="text"  value={dropdown} onChange={(e)=>setDropdown(e.target.value)} />
  </div>
  <div>
    <label>Dropdown1 </label><br></br>
    <input type="text"  value={dropdown1} onChange={(e)=>setDropdown1(e.target.value)} /> 
  </div>
  <div>
    <label>Dropdown2 </label><br></br>
    <input type="text"  value={dropdown2} onChange={(e)=>setDropdown2(e.target.value)} /> 
  </div>
  <div>
    <label>Dropdown2 </label><br></br>
    <input type="text"  value={dropdown3} onChange={(e)=>setDropdown3(e.target.value)} /> 
  </div>
    <br></br>
  <Link to="/">
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </Link>
</form>
    </div>
  )
}

export default Home

