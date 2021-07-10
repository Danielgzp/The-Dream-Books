import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeForm.css";

class BookForm extends React.Component {

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Book Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="book_name"
              value={this.props.formValues.book_name}
            />
          </div>

          <div className="form-group">
            <label>Autor</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="autor"
              value={this.props.formValues.autor}
            />
          </div>

          <div className="form-group">
            <label>Imagen del libro(url)</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="books_image"
              value={this.props.formValues.books_image}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="description"
              value={this.props.formValues.description}
            />
          </div>

          <div className="form-group">
            <label>Link de descarga</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="download"
              value={this.props.formValues.download}
            />
          </div>
          <div className="buttons">
            <button
              onClick={this.handleClick}
              className="btn save-button left"
            >
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
