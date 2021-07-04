import React from "react";
import { Link } from "react-router-dom";

import UseBooks from "../UseBooks";
import "./styles/CategoriesList.css";

const CategoriesList = () => {
    
  const initialState = UseBooks({ endpoint: "categories" });
  const categorie = initialState.initial_categories

  return (
    <aside className="section">
      <div className="list-container">
        <h2 className="title-list">Categorias</h2>
        <ul className="categories-list">
          {categorie.map((title) => (
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
