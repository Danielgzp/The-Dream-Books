import React from "react";

import Constantes from "../Constantes";
import api from "../UseBooks";
import BookForm from "../components/BookForm";
import BookInformation from "../components/BookInformation";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import Swal from "sweetalert2";

class BookEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      id: '',
      books_image: "",
      book_name: "",
      description: "",
      download: "",
      price: "",
      author: '',
      category: '',
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
      const data = await api.books.read(this.props.match.params.bookId);
      const dataCategories = await api.books.list("categories")
      const dataAuthors = await api.books.list("autores");
      this.setState({ loading: false, form:{
        id: data.id,
        books_image: data.books_image,
        book_name: data.book_name,
        description: data.description,
        download: data.download,
        price: data.price,
        author: '',
        category: '',
      }, formCategories: dataCategories, formAuthors: dataAuthors });

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
      /*formCategories: {
        ...this.state.formCategories,
        [e.target.name]: e.target.value,
      },
      formAuthors: {
        ...this.state.formAuthors,
        [e.target.name]: e.target.value,
      }*/
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true});

    if(this.state.form.author === ''){
      Swal.fire("Oops", "Tienes que seleccionar un autor que se encuentre en la lista o agregarlo", "error");
      this.setState({ loading: false});
    }else if(this.state.form.category === ''){
      Swal.fire("Oops", "Tienes que seleccionar una categoría que se encuentre en la lista o agregarla", "error");
      this.setState({ loading: false});
    }else{

      const send = JSON.stringify(this.state.form);

      const answer = await fetch(`${Constantes.RUTA_API}/updateBook`, {
        method: "POST",
        body: send,
      });

      const answer_json = await answer.json();

      if (answer_json) {
        this.setState({ loading: false});

        if (answer_json === "S") {
          Swal.fire(
            "El libro se ha actualizado correctamente",
            "",
            "success"
          );

          this.props.history.push("/");

        } else {
          
          Swal.fire("Oops", answer_json, "error");

        }
      } else {
        Swal.fire("Oops", "Ha ocurrido un error. Intente nuevamente.", "error");

      }

    // try {
    //   await api.books.update(this.props.match.params.bookId, this.state.form);
    //   Swal.fire(this.state.form.id_book);
    //   this.setState({ loading: false });
    //   this.props.history.push("/");
    // } catch (error) {
    //   this.setState({ loading: false, error: error });
    // }

    // Swal.fire("Los cambios han sido guardados exitosamente!");
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError />;
    }
    return (
      <React.Fragment>
        <div className="Book-Layout"></div>

        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <BookInformation book={this.state.form} />
            </div>

            <div className="col l6 s12">
              <h1>Edit Book</h1>
              <BookForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
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

export default BookEdit;
