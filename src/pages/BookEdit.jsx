import React from "react";

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
      books_image: "",
      name: "",
      autor: "",
      description: "",
      download: "",
      price: ""
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
      this.setState({ loading: false, form: data, formCategories: dataCategories, formAuthors: dataAuthors });
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
    this.setState({ loading: true, error: null });

    try {
      await api.books.update(this.props.match.params.bookId, this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }

    Swal.fire("Los cambios han sido guardados exitosamente!");
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
                hola='b'
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BookEdit;
