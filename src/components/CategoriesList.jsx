import React from "react";
import { Link } from "react-router-dom";

import UseBooks from "../UseBooks";
import "./styles/CategoriesList.css";

const CategoriesList = () => {
    
  const books_categories = UseBooks({ endpoint: "categories" });

  return (
    <aside>
      <div className="main-div--aside">
        <h2 className="title-list">Categorias</h2>
        <ul className="main-aside--lista">
          {books_categories.initial_categories.map((title) => (
            <li className="lista-elemento">
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
