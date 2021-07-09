import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/BookDetails.css";
import BookInformation from "../components/BookInformation";

const BookDetails = () => {
  return (
    <React.Fragment>
      <div>
        <div className="Book-Layout"></div>

        <div className="container">
          <div className="row">
            <div className="col l6 s12">
                <BookInformation />
              {/* <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle}
              /> */}
            </div>
            <div className="col l6 s12 actions">
              <h2 className="center-align">Actions</h2>
              <div className="BooksDetails__buttons">
                {/* <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className="btn btn-primary mr-4"
                >
                  Increase Count: {count}
                </button> */}
                <Link
                  className="btn edit-button"
                  to={`/libroi/detalles/editar/`}
                >
                  Edit Book
                </Link>
                <button
                  /*onClick={props.onOpenModal}*/ className="btn delete-button"
                >
                  Delete Book
                </button>
                {/* <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookDetails;
