import React from 'react'
import {Link} from "react-router-dom" 
import { useState,useEffect } from "react"

const Header = () => {

    const [menu,setMenu]=useState([]);
    useEffect (()=>{
        const getData=async()=>{
            const reqdata=await fetch(" http://localhost:8000/menus")
            const resData=await reqdata.json();
            console.log(resData);
            setMenu(resData)
        }
        getData();
    },[])

  return (

    <div>
      <nav className="navbar navbar-expand-lg bg-red" style={{backgroundColor:"lightpink"}}>
  <div className="container-fluid">
    <Link tto="/" className="navbar-brand" style={{color:"red"}} >Dynamic</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active"  aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/read" className="nav-link active" aria-current="page" >Read</Link>
        </li>
        <li className="nav-item">
          <Link to="/update" className="nav-link active" aria-current="page" >Update</Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutus" className="nav-link" >About us</Link>
        </li>

        
        {menu.map((e)=>{
          return(
                    
            <div className='navbar-menu'>
            <ul>
                <li><Link className="dropdown-toggle">{e.dropdown}</Link>
                <div className='sub-menu'>
                      <ul>
                       <li><Link>{e.drop.dropdown1}</Link></li>
                       <li className='list' ><Link className='dropdown-toggle'>{e.drop.dropdown2}</Link>
                       <div className='sub-menu1'>
                        <ul>
                             <li><Link>entertainment</Link></li>
                             <li><Link>enjoyment</Link></li>
                          </ul>
                       </div>
                       </li>
        
                       <li><Link>{e.drop.dropdown3}</Link></li>
                      
                        </ul>
                       </div>
                    </li>     
                 </ul>
            </div>     
           
            
          )
        }) }      
          
          


        <li className="nav-item">
          <Link to="/contactus" className="nav-link "  aria-disabled="true">Contact us</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header









// { menu.map( (e)=>{
//   return(
//     <li className="nav-item dropdown">
//     <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//       {e.dropdown}
//     </Link>
//   <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//       <li><Link className="dropdown-item" >{e.drop.dropdown1}</Link>
//       <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//       <li><Link className="dropdown-item" >{e.drop1.dropdown1}</Link></li>
//       <li><Link className="dropdown-item">{e.drop1.dropdown2}</Link></li>
//       </ul>
//       </li>
//       <li><Link className="dropdown-item">{e.drop.dropdown2}</Link></li>
//       <li><Link className="dropdown-item" >{e.drop.dropdown3}</Link></li>
     
//     </ul>
//   </li>

// )})
// }