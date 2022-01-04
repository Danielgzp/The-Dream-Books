import React from "react";

import "./styles/BookForm.css";
import "./styles/AddAuthorsCateogries.css";

import autorPicture from "../images/autor.jpg";
import { Link } from "react-router-dom";

const AddAuthor = (sendAuthor) => {
  return (
    <React.Fragment>
      <div>
        <h2 className="center">Add New Author</h2>
        <figure className="center-align">
          <img src={autorPicture} alt="Autor" />
        </figure>
        <form id="information-form" onSubmit={sendAuthor}>
          <div className="form-group inputs-container__author-categories">
            <label id="information-label">Author Name</label>
            <input
              type="text"
              name="categorie_name"
              id="input-form"
              placeholder="Name"
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

export default AddAuthor;
