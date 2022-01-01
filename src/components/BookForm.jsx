import React from "react";
import { Link } from "react-router-dom";

import "./styles/BookForm.css";

class BookForm extends React.Component {
  handleClick = (e) => {
    console.log("Button was clicked");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit} id="information-form">
          <div className="form-group">
            <label id="information-label">Book Name</label>
            <input
              onChange={this.props.onChange}
              id="input-form"
              type="text"
              name="book_name"
              value={this.props.formValues.book_name}
            />
          </div>

          <div className="form-group">
            <label>Autor</label>
            <input
              onChange={this.props.onChange}
              id="input-form"
              type="text"
              name="autor"
              value={this.props.formValues.autor}
            />
          </div>

          <div className="form-group">
            <label>Imagen del libro(url)</label>
            <input
              onChange={this.props.onChange}
              id="input-form"
              type="text"
              name="books_image"
              value={this.props.formValues.books_image}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              onChange={this.props.onChange}
              id="input-form"
              type="text"
              name="description"
              value={this.props.formValues.description}
            />
          </div>

          <div className="form-group">
            <label>Link de descarga</label>
            <input
              onChange={this.props.onChange}
              id="input-form"
              type="text"
              name="download"
              value={this.props.formValues.download}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              onChange={this.props.onChange}
              id="input-form"
              type="text"
              name="price"
              value={this.props.formValues.price}
            />
          </div>
          {/* TOY TRABaJANDO AQUII */}
          <div className="form-group">
            <label>Categorie</label>
            <input list="categories" />
            <datalist id="categories">
              <option value="Autoayuda"></option>
              <option value="Aventura"></option>
              <option value="Biografía y Memorias"></option>
              <option value="Ciencias Exactas"></option>
              <option value="Ciencias Naturales"></option>
              <option value="Ciencias Sociales"></option>
              <option value="Ciencia y Ficción"></option>
              <option value="Drama"></option>
              <option value="Ensayos"></option>
              <option value="Espitirualidad"></option>
              <option value="Fantasia"></option>
              <option value="Humor"></option>
              <option value="Infantil"></option>
              <option value="Terror y Suspenso"></option>
              <option value="Viajes y Guías"></option>
            </datalist>
          </div>
          {/* TOY TRABaJANDO AQUII */}
          <div className="buttons">
            <button onClick={this.handleClick} className="btn save-button left">
              Save
            </button>
            <Link className="ml-2 btn cancel-button" to="/">
              Cancel
            </Link>
            {this.props.error && <p>{this.props.error.message}</p>}
          </div>
        </form>
      </div>
    );
  }
}

export default BookForm;
