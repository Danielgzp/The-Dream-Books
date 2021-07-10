import React, { useEffect, useState } from "react";

import BookItem from "../components/BookItem";
import api from "../UseBooks";
import BookForm from "../components/BookForm";
import BookInformation from "../components/BookInformation";

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
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
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
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        await api.books.update(this.props.match.params.bookId , this.state.form);
      } catch (error) {
        console.error("Error");
      }
    };
    return (
      <React.Fragment>
        <div className="Book-Layout"></div>

        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <BookInformation book={this.state.form} />
              {/* <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              /> */}
            </div>

            <div className="col l6 s12">
              <h1>Edit Book</h1>
              <BookForm
                onChange={this.handleChange}
                onSubmit={handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BookEdit;
