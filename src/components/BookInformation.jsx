import React from "react";

import "./styles/BookInformation.css";

const BookInformation = ({ book }) => {
  return (
    <div>
      <article className="information-container">
        <figure className="portrait-container center">
          <img
            src={book.books_image}
            alt="Portada del Libro"
            className="responsive-image center"
          />
          <figcaption>{book.book_name}</figcaption>
        </figure>
        <div className="center">
          <h4>{book.autor}</h4>
          <a href={book.download}>Link de Descarga</a>
        </div>
        <div>
          <p>{book.description}</p>
        </div>
      </article>
    </div>
  );
};

export default BookInformation;
