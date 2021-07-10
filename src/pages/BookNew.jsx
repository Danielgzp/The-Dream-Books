import React, { useEffect, useState } from "react";

import BookForm from "../components/BookForm";
import BookInformation from "../components/BookInformation";
import api from "../UseBooks";

class BookNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      books_image: "",
      book_name: "",
      autor: "",
      description: "",
      download: "",
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
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      this.setState({ loading: true, error: null });
      console.log(this.state.form)
  
      try {
        console.log(this.state.form)
        await api.books.create(this.state.form);
        this.setState({ loading: false });
  
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
              <BookInformation />
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
              <h1>New Book</h1>
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

export default BookNew;
