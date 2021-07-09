import React, { useEffect, useState } from "react";


import BookItem from "../components/BookItem";
import api from "../UseBooks";
import BookForm from "../components/BookForm";
import BookInformation from "../components/BookInformation";

const EditBook = () => {
  const [state, setState] = useState({
    form: {
      books_image: "",
      name: "",
      autor: "",
      description: "",
      download: "",
    },
  });

  const handleChange = (e) => {
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.books.create(state.form);
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
            <h1>Edit Book</h1>
            <BookForm
              onChange={handleChange}
              onSubmit={handleSubmit}
              formValues={state.form}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditBook;
