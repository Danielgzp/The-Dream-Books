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
          {this.props.hola != 'a' && (
            <React.Fragment>
              <div className="form-group">
                <label>Categorie</label>
                <input
                  list="categories"
                  id="input-form"
                  type="text"
                  name="categories"
                />
                <datalist id="categories">
                  {this.props.categories.map((categorie) => (
                    <option value={categorie.categorie_name}></option>
                  ))}
                </datalist>
              </div>

              <div className="form-group">
                <label>Author</label>
                <input
                  list="authors"
                  id="input-form"
                  type="text"
                  name="authors"
                />
                <datalist id="authors">
                  {this.props.authors.map((author) => (
                    <option value={author.autor_name}></option>
                  ))}
                </datalist>
              </div>
            </React.Fragment>
          )}
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
