import React from "react";
import Swal from "sweetalert2";

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
      autor: "Autor",
      description: "Descripcion",
      download: "Link de descarga",
    },
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

      try {
        await api.books.create(this.state.form);
        Swal.fire("El libro ha sido creado exitosamente!!");
        this.setState({ loading: false });
        this.props.history.push("/");
      } catch (error) {
        this.setState({ loading: false, error: error });
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
                hola='a'
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BookNew;
