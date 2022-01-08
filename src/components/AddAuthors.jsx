import React from "react";
import Constantes from "../Constantes";
import Swal from "../../node_modules/sweetalert2/dist/sweetalert2.all";
import PageLoading from "../components/PageLoading";

import "./styles/BookForm.css";
import "./styles/AddAuthorsCateogries.css";

import autorPicture from "../images/autor.jpg";
import { Link } from "react-router-dom";

// const AddAuthor = (sendAuthor) => {

class AddAuthor extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      author_name: ''
    };
    // Indicarle a las funciones a quién nos referimos con "this"
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({author_name: event.target.value});
  }


  //Enviar formulario

 async handleSubmit(event) {
    event.preventDefault();
    this.setState({loading: true});
    
    const send = JSON.stringify(this.state.author_name);

    const answer = await fetch(`${Constantes.RUTA_API}/addAuthor`, {
      method: "POST",
      body: send,
    });

    const answer_json = await answer.json();

    this.setState({loading: false});

    if (answer_json) {
      if (answer_json === "S") {
        Swal.fire(
          "Success!",
          "Autor agregado correctamente",
          "success"
        );

        this.setState({
          author_name: ''
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
        <h2 className="center">Add New Author</h2>
        <figure className="center-align">
          <img src={autorPicture} alt="Autor" />
        </figure>
        <form onSubmit={this.handleSubmit} id="information-form" >
          <div className="form-group inputs-container__author-categories">
            <label id="information-label">Author Name</label>
            <input
              type="text"
              name="autor_name"
              id="input-form"
              placeholder="Name"
              onChange={this.handleChange}
              value={this.state.author_name}
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

export default AddAuthor;
