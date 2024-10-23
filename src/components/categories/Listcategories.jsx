import axios from 'axios';
import React, { useEffect, useState, Suspense } from 'react'
import Affichecategories from './Affichecategories';
import { Link } from 'react-router-dom';
import {Button} from '@mui/material';

const Listcategories = () => {
    const[categories,setCategories]=useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    
  const getcategories=async()=>{
    /*
   await axios.get("https://backendecomgs1.vercel.app/api/api/categories")
    .then(res=>{
      setCategories(res.data)
       )
  .catch(error=>{
    console.log(error)
  })
  . finally (()=>
    setIsLoading(false)
  )
    }
      */
    fetch('https://backendecomgs1.vercel.app/api/api/categories')
    .then(response => response.json())
    .then(data =>   setCategories(data))
    .catch(error => console.error(error))
    . finally (()=>
      setIsLoading(false)
    )
 
}

useEffect(() => {
    getcategories()
     },[])

if (isLoading) { 
      return <div>Loading Data please wait...</div>; // Message de chargement
    }
    
  return (
    <div>
        <Button variant="contained" style={{ backgroundColor: 'black' }}>
          <Link to="/categories/add" style={{ color: 'white', textDecoration : 'none'}}>
          <i className="fa-solid fa-plus-square"></i> Nouveau
          </Link>
          </Button>

      <h2>Liste des catégories </h2>
        <Affichecategories categories={categories} setCategories={setCategories}/>
    </div>
  )
}

export default Listcategories
