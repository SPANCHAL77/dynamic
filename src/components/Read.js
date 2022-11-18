import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
    const[data, setData]=useState([]);

function getData(){
    axios.get(" http://localhost:8000/menus")
    .then((res)=>{
        console.log(res);
        setData(res.data);
    })
}

useEffect(()=>{
    getData();
},[])

function handleDelet(id){
    axios.delete(` http://localhost:8000/menus/${id}`)
    .then(()=>{
        getData();
    })
}

const setToLocalStorage=(id)=>{
    const sud=data[id-1]
    localStorage.setItem("id",sud.id)
    localStorage.setItem("dropdown",sud.dropdown)
    localStorage.setItem("dropdown1",sud.drop.dropdown1)
    localStorage.setItem("dropdown2",sud.drop.dropdown2)
    localStorage.setItem("dropdown3",sud.drop.dropdown3)
}


  return(
    <div>
        <h1>Read Operation</h1>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Dropdown</th>
      <th scope="col">Dropdown1</th>
      <th scope='col'>Dropdown2</th>
      <th scope='col'>dropdown3</th>
      <th scope='col'>Edit</th>
      <th scope='col'>Delete</th>
    </tr>
  </thead>
  { data.map((e)=>{
    return(
        <>
             <tbody>
    <tr>
      <th scope="row">{e.id}</th>
      <td>{e.dropdown}</td>
      <td>{e.drop.dropdown1}</td>
      <td>{e.drop.dropdown2}</td>
      <td>{e.drop.dropdown3}</td>
      <td>
        <Link to= '/update'>
        <button className='btn-success' onClick={()=>setToLocalStorage(e.id)}>edit</button>
        </Link>   
    </td>
    <td>
        <Link to="/read">
        <button className='btn-danger' onClick={()=>handleDelet(e.id)}>delete</button>
        </Link>
        
      </td>
    </tr>
    
  </tbody>
        </>
    )
  })
    
}
</table>
 </div>
  )
}

export default Read

