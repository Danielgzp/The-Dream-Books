import React from "react";

import "./styles/BookForm.css";
import "./styles/AddAuthorsCateogries.css";

import categoriesPicture from "../images/Categories.png";
import { Link } from "react-router-dom";

const AddCategorie = (sendCategorie) => {
  return (
    <React.Fragment>
      <div>
        <h2 className="center">Add New Categorie</h2>
        <figure className="center-align">
          <img src={categoriesPicture} alt="Libros Categorias" />
        </figure>

        <form id="information-form" onSubmit={sendCategorie}>
          <div className="form-group inputs-container__author-categories">
            <label id="information-label">Categorie Name</label>
            <input
              type="text"
              name="categorie_name"
              id="input-form"
              placeholder="Insert Name"
            />
          </div>
          <div className="form-group inputs-container__author-categories">
            <label id="information-label">Categorie Id</label>
            <input
              type="text"
              name="categorie_id"
              id="input-form"
              placeholder="Insert ID"
            />
          </div>
        </form>

        <div>
          <button className="btn save-button left btn-author">Save</button>
          <Link className="ml-2 btn cancel-button" to="/">
            Cancel
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddCategorie;
