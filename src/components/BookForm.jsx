import React from "react";
import { Link } from "react-router-dom";

import "./styles/BookForm.css";

class BookForm extends React.Component {
  handleClick = (e) => {
    console.log("Button was clicked");
  };

  //Función para guardar lo seleccionado en las datalist
    handleInputChange = (e) => {
      if(e.target.id === 'input-form1'){
        var inputValue = document.getElementById("input-form1").value;
        var options = document.getElementById("categories").childNodes;
        for (var i = 0; i < options.length; i++) {
          if (options[i].value === inputValue) {

            this.props.formValues.category = options[i].id;

            break;
          }
        }
      }else{
        var inputValue = document.getElementById("input-form2").value;
        var options = document.getElementById("authors").childNodes;
        for (var i = 0; i < options.length; i++) {
          if (options[i].value === inputValue) {

            this.props.formValues.author = options[i].id;

            break;
          }
        }
      }
  }

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
            <label>Author</label>
            <input list="authors" id="input-form2" type="text" name="authors" onChange={this.handleInputChange}/>
            <datalist id="authors">
              {this.props.authors.map((author) => (
                <option id={author.id_author} value={author.autor_name}></option>
              ))}
            </datalist>
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

          <div className="form-group">
            <label>Categorie</label>
            <input
              list="categories"
              id="input-form1"
              class="input-form"
              type="text"
              name="categories"
              onChange={this.handleInputChange}
            />
            <datalist id="categories">
              {this.props.categories.map((categorie) => (
                <option id={categorie.categorie_id} value={categorie.categorie_name}></option>
              ))}
            </datalist>
          </div>

          
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
