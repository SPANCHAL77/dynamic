import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Update() {
  const [id,setId]=useState("");
  const [dropdown,setDropdown]=useState();
  const [dropdown1,setDropdown1]=useState();
  const [dropdown2,setDropdown2]=useState();
  const [dropdown3,setDropdown3]=useState();
  const history= useNavigate();

  const handleForm =(e)=>{
    e.preventDefault();
}

useEffect(()=>{
      setId(localStorage.getItem("id"));
      setDropdown( localStorage.getItem("dropdown"));
      setDropdown1(localStorage.getItem("dropdown1"));
      setDropdown2(localStorage.getItem("dropdown2"));
      setDropdown3(localStorage.getItem("dropdown3"));
         
       },[])

       const handleUpdate=()=>{
        axios.put(` http://localhost:8000/menus/${id}`,{
            dropdown:dropdown,
            drop: {
            dropdown1:dropdown1,
            dropdown2:dropdown2,
            dropdown3:dropdown3,
           }
             }).then(()=>{
            history("/read")
        })
    }
    

  return (
    <div>
       <h1>Update</h1>
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
  <Link to="/read">
  <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
  </Link>
</form>
    </div>
  )
}

export default Update


