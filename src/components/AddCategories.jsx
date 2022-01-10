import React from "react";
import Constantes from "../Constantes";
import Swal from "../../node_modules/sweetalert2/dist/sweetalert2.all";
import PageLoading from "../components/PageLoading";

import "./styles/BookForm.css";
import "./styles/AddAuthorsCateogries.css";

import categoriesPicture from "../images/Categories.png";
import { Link } from "react-router-dom";

// const AddCategorie = (sendCategorie) => {

class AddCategory extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      category_name: ''
    };
    // Indicarle a las funciones a quién nos referimos con "this"
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({category_name: event.target.value});
  }

  //Enviar formulario

 async handleSubmit(event) {
    event.preventDefault();
    this.setState({loading: true});
    
    const send = JSON.stringify(this.state.category_name);

    const answer = await fetch(`${Constantes.RUTA_API}/addCategory`, {
      method: "POST",
      body: send,
    });

    const answer_json = await answer.json();

    this.setState({loading: false});

    if (answer_json) {
      if (answer_json === "S") {
        Swal.fire(
          "Success!",
          "Categoría agregada correctamente",
          "success"
        );

        this.setState({
          category_name: ''
        });

      } else {
        Swal.fire("Oops", answer_json, "error");
      }
    } else {
      Swal.fire("Oops", "Ha ocurrido un error. Intente nuevamente.", "error");
    }
    }


  render(){
    if (this.state.loading) {
      return <PageLoading />;
    }
  return (
    <React.Fragment>
      <div>
        <h2 className="center">Add New Categorie</h2>
        <figure className="center-align">
          <img src={categoriesPicture} alt="Libros Categorias" />
        </figure>

        <form onSubmit={this.handleSubmit} id="information-form">
          <div className="form-group inputs-container__author-categories">
            <label id="information-label">Categorie Name</label>
            <input
              type="text"
              name="categorie_name"
              id="input-form"
              placeholder="Insert Name"
              onChange={this.handleChange}
              value={this.state.category_name}
            />
          </div>
          <input
            type="submit"
            value="Save"
            className="btn save-button left btn-author"
          />
        </form>

        <div>
          <Link className="ml-2 btn cancel-button" to="/">
            Cancel
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
}

export default AddCategory;
