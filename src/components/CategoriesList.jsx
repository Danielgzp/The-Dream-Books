import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../UseBooks";
import "./styles/CategoriesList.css";

const CategoriesList = () => {
    
  const [categories, setCategories] = useState([]);
    
     useEffect( async () => {
         try {
            const data = await api.books.list('categories');
            setCategories(data);
         } catch (err) {
            console.log(err);
         }
     }, []);
  

  return (
    <aside className="section">
      <div className="list-container">
        <h2 className="title-list">Categorias</h2>
        <ul className="categories-list">
          {categories.map((title) => (
            <li className="categories-list__element" key={title.categorie_id}>
              <Link
                to={`/categories/${title.categorie_name}/`
                  .toLowerCase()
                  .replaceAll(" ", "-")}
              >
                <i className="down-arrow"></i>
                {title.categorie_name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CategoriesList;
