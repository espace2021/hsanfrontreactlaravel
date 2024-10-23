import axios from "axios";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Insertarticle = () => {
  let navigate = useNavigate();

  const [article,setArticle]=useState({})
   

  const[scategories,setScategories]=useState([])

  useEffect(() => {
    getscategories()
  
  }, [])
  const getscategories=async()=>{
    try {
      const res=await axios.get("https://backendecomgs1.vercel.app/api/api/scategories")
      setScategories(res.data)
    } catch (error) {
      console.log(error)
    }
  }


  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://backendecomgs1.vercel.app/api/api/articles", article);
    navigate("/articles");
  };
  return (
    <div className="container">
      <div className="row">
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
              
              <h4 align="center">Ajout Article</h4>
              <div className='form mt-3'>
          <Form className="border p-3" onSubmit={(e) => onSubmit(e)} >
          
            <Row className="mb-2">
              <Form.Group as={Col} md="6" >
                <Form.Label >Référence *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Référence"
                  value={article.reference}
                  onChange={(e)=> setArticle({ ...article,reference: e.target.value })}
                 
                />
             
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Désignation *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Désignation"
                 value={article.designation}
                 onChange={(e)=> setArticle({ ...article,designation: e.target.value })}
                />
                
              </Form.Group>
              </Row>
              <Row className="mb-2">
              <Form.Group className="col-md-6">
            <Form.Label>Marque *</Form.Label>
          
            <Form.Control
              type="text"
              required
              placeholder="Marque"
              value={article.marque}
              onChange={(e)=> setArticle({ ...article,marque: e.target.value })}
            />
            
            
          </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Prix</Form.Label>
                       
                  <Form.Control
                    type="number"
                    placeholder="Prix"
                    value={article.prix}
                    onChange={(e)=> setArticle({ ...article,prix: e.target.value })}
                  />
                  
                
              </Form.Group>
           
            </Row>
            <Row className="mb-3">
              <Form.Group className="col-md-6 ">
            <Form.Label>
              Qté stock<span className="req-tag">*</span>
            </Form.Label>
            <Form.Control
              required
              type="number"
              value={article.qtestock}
              onChange={(e)=> setArticle({ ...article,qtestock: e.target.value })}
              placeholder="Qté stock"
            />
              
           
          </Form.Group>
          <Form.Group as={Col} md="6">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Image"
                 value={article.imageart}
                 onChange={(e)=> setArticle({ ...article,imageart: e.target.value })}
                />
                
              </Form.Group> 
              <Form.Group as={Col} md="12">
              <Form.Label>Catégorie</Form.Label>
            <Form.Control
              
              as="select"
              type="select"
              
              value={article.scategorieID}
              onChange={(e)=> setArticle({ ...article,scategorieID: e.target.value })}
              
            >
                           {scategories.map((scat,index)=>
              <option value={scat.id}>{scat.nomscategorie}</option>
              )}

              
            </Form.Control>
            
          </Form.Group> 
              
           </Row>
           <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
           <Link className="btn btn-outline-danger mx-2" to="/articles">
              Cancel
            </Link>
          </Form>
          </div>
          </div>
          
          </div>
          </div>
         
      
  )
}

export default Insertarticle
