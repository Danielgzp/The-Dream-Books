import React from "react";
import Swal from "sweetalert2";
import Constantes from "../Constantes";

import BookForm from "../components/BookForm";
import BookInformation from "../components/BookInformation";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import api from "../UseBooks";

class BookNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      books_image: "https://i.imgur.com/1HJXMsR.jpeg",
      book_name: "Nombre del libro",
      description: "Descripcion",
      download: "Link de descarga",
      price: "1.99",
      autor: "Nombre del autor",
      category: "",
    },
    formCategories: [],
    formAuthors: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      //const data = await api.books.read(this.props.match.params.bookId);
      const dataCategories = await api.books.list("categories");
      const dataAuthors = await api.books.list("autores");
      this.setState({
        loading: false,
        formCategories: dataCategories,
        formAuthors: dataAuthors,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError />;
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      this.setState({ loading: true, error: null });

      if (this.state.form.author === "") {
        Swal.fire(
          "Oops",
          "Tienes que seleccionar un autor que se encuentre en la lista o agregarlo",
          "error"
        );
        this.setState({ loading: false });
      } else if (this.state.form.category === "") {
        Swal.fire(
          "Oops",
          "Tienes que seleccionar una categoría que se encuentre en la lista o agregarla",
          "error"
        );
        this.setState({ loading: false });
      } else {
        const send = JSON.stringify(this.state.form);

        const answer = await fetch(`${Constantes.RUTA_API}/addBook`, {
          method: "POST",
          body: send,
        });

        const answer_json = await answer.json();

        if (answer_json) {
          if (answer_json === "S") {
            Swal.fire("Success!", "Libro agregado correctamente", "success");

            this.setState({ loading: false });
            this.props.history.push("/");
          } else {
            Swal.fire("Oops", answer_json, "error");
            this.setState({ loading: false });
          }
        } else {
          Swal.fire(
            "Oops",
            "Ha ocurrido un error. Intente nuevamente.",
            "error"
          );
          this.setState({ loading: false });
        }
      }
    };

    return (
      <React.Fragment>
        <div className="Book-Layout"></div>

        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <BookInformation book={this.state.form} />
            </div>

            <div className="col l6 s12">
              <h1>New Book</h1>
              <BookForm
                onChange={this.handleChange}
                onSubmit={handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
                categories={this.state.formCategories}
                authors={this.state.formAuthors}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BookNew;
