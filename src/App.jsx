import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Editarticle from "./components/articles/Editarticle";
import Insertarticle from "./components/articles/Insertarticle";
import Listarticles from "./components/articles/Listarticles";
const Listcategories = lazy(() => import('./components/categories/Listcategories'));
import Editcategorie from "./components/categories/Editcategorie";
import Insertcategorie from "./components/categories/Insertcategorie";
import Editscategorie from "./components/scategories/Editscategorie";
import Insertscategorie from "./components/scategories/Insertscategorie";
import Listscategories from "./components/scategories/Listscategories";
import Viewarticle from "./components/articles/Viewarticle";
import Viewcategorie from "./components/categories/Viewcategorie";
import Viewscategorie from "./components/scategories/Viewscategorie";
import Menu from "./components/Menu";
import React from "react";
const Listcategoriesl = lazy(() => import('./components/categorieslazyImage/Listcategories'));
import Editcategoriel from "./components/categorieslazyImage/Editcategorie";
import Insertcategoriel from "./components/categorieslazyImage/Insertcategorie";
import Viewcategoriel from "./components/categorieslazyImage/Viewcategorie";

const App = () => {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        {/* Le composant Menu est toujours affiché */}
        <Menu />
        
        {/* Le composant Suspense entoure les routes qui contiennent des composants chargés dynamiquement */}
       
          <Routes>
            {/* Route pour Listcategories qui est chargé dynamiquement */}
            <Route path="/categories" element={<Listcategories />} />
            <Route path="/categoriesl" element={<Listcategoriesl />} />
            {/* Les autres routes ne nécessitent pas Suspense car elles sont chargées statiquement */}
            <Route path="/" element={<Listarticles />} />
            <Route path="/articles" element={<Listarticles />} />
            <Route path="/articles/add" element={<Insertarticle />} />
            <Route path="/article/edit/:id" element={<Editarticle />} />
            <Route path="/article/view/:id" element={<Viewarticle />} />
            <Route path="/categories/add" element={<Insertcategorie />} />
            <Route path="/categories/edit/:id" element={<Editcategorie />} />
            <Route path="/categories/view/:id" element={<Viewcategorie />} />
            <Route path="/scategories" element={<Listscategories />} />
            <Route path="/scategories/add" element={<Insertscategorie />} />
            <Route path="/scategories/edit/:id" element={<Editscategorie />} />
            <Route path="/scategories/view/:id" element={<Viewscategorie />} />
            <Route path="/categoriesl/add" element={<Insertcategoriel />} />
            <Route path="/categoriesl/edit/:id" element={<Editcategoriel />} />
            <Route path="/categoriesl/view/:id" element={<Viewcategoriel />} />
          </Routes>
     
      </Router>
      </Suspense>
    </div>
  );
}

export default App;