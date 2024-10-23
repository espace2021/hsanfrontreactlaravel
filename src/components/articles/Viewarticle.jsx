import axios from "axios";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Cardarticle from "./Cardarticle";

const Viewarticle = () => {

  const [article, setArticle] = useState({
    reference: "",
    designation: "",
    imageart: "",
    prix:"",
    qtestock:0
  });

  const { id } = useParams();

  useEffect(() => {
    loadArticle();
  }, []);

  const loadArticle = async () => {
    const result = await axios.get(`https://backendecomgs1.vercel.app/api/api/articles/${id}`);
    setArticle(result.data);
  };
  return (
    <div>
      <Cardarticle article={article}/>
    </div>
  )
}

export default Viewarticle

