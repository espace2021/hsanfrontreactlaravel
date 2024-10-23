import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Listarticles = () => {

      const [articles, setArticle] = useState([]);
      
  
  
    useEffect(() => {
      loadArticles();
    }, []);
  
    const loadArticles = async () => {
      try {
        
        const res = await axios.get("https://backendecomgs1.vercel.app/api/api/articles");
        setArticle(res.data);
      } catch (error) {
        console.error('Error loading articles:', error);
      }
    };
  
    const handleDelete = async (id) => {
      await axios.delete(`https://backendecomgs1.vercel.app/api/api/articles/${id}`);
      loadArticles();
    };
  
  return (
    <div className="container">
      <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
         
          

          <Link className="btn btn-outline-light" to="/articles/add">
            Ajouter article
          </Link>
        </div>
      </nav>
    </div>
    <div className="py-4">
      <table className="table border shadow">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Référence</th>
            <th scope="col">Désignation</th>
            <th scope="col">Quantité Stock</th>
            <th scope="col">Prix</th>
            <th scope="col">View</th>
            <th scope="col">Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((art, index) => (
            <tr key={art.id}>
            
              <td><img src={art.imageart} width={80} height={80}/></td>
              <td>{art.reference}</td>
              <td>{art.designation}</td>
              <td>{art.qtestock}</td>
              <td>{art.prix}</td>

              <td>
                <Link
                  className="btn btn-primary mx-2"
                  to={`/article/view/${art.id}`}
                >
                  Consulter
                </Link>
                </td>
                <td>
                <Link
                  className="btn btn-outline-primary mx-2"
                  to={`/article/edit/${art.id}`}
                >
                  Modifier
                </Link>
                </td>
                <td>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => handleDelete(art.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Listarticles
