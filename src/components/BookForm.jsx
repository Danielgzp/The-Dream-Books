import React from "react";
import { Link } from "react-router-dom";

import './styles/BadgeForm.css'

const BookForm = ({ onChange, onSubmit, formValues }) => {

  const handleClick = (e) => {
    console.log("Button was clicked");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Book Name</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="name"
            value={formValues.name}
          />
        </div>

        <div className="form-group">
          <label>Autor</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="autor"
            value={formValues.autor}
          />
        </div>

        <div className="form-group">
          <label>Imagen del libro(url)</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="books_image"
            value={formValues.books_image}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="description"
            value={formValues.description}
          />
        </div>

        <div className="form-group">
          <label>Link de descarga</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="download"
            value={formValues.download}
          />
        </div>
        <div className="buttons">
          <button onClick={handleClick} className="btn save-button left">
            Save
          </button>
          <Link className="ml-2 btn cancel-button" to="/">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
