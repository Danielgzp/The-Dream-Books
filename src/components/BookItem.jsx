import React from "react";
import { Link } from "react-router-dom";

import Cookies from "universal-cookie";
import "./styles/BookItem.css";

const BookItem = ({ book }) => {
  const cookies = new Cookies();

  return (
    <article>
      <div className="book-portrait">
        <Link
          to={`/libro/${book.book_name}`
            .toLowerCase()
            .replaceAll(" ", "-")
            .normalize("NFD")
            .replace(/[?¿¡!\u0300-\u036f]/g, "")}
        >
          <img
            src={book.books_image}
            alt="Portada del Libro"
            className="responsive-img z-depth-2"
          />
        </Link>
        <h3>{book.book_name}</h3>
      </div>

      <div className="autor">
        <Link
          className=""
          to={`/autor/${book.autor}/`
            .toLowerCase()
            .replaceAll(" ", "-")
            .normalize("NFD")
            .replace(/[?¿¡!\u0300-\u036f]/g, "")}
        >
          {book.autor}
        </Link>
      </div>
      <div className="descargar">
        <Link
          className=""
          to={`/libro/${book.book_name}`
            .toLowerCase()
            .replaceAll(" ", "-")
            .normalize("NFD")
            .replace(/[?¿¡!\u0300-\u036f]/g, "")}
        >
          DESCARGAR LIBRO
        </Link>
      </div>
      {cookies.get("privilegio") === "administrador" && (
        <div>
          <Link to={`/libro/${book.id}`} className="btn edit-book">
            <i className="material-icons">edit</i> Editar Libro
          </Link>
        </div>
      )}
      <div>
        <Link to={`/libro/${book.id}`} className="btn edit-book">
          <i className="material-icons">edit</i> Editar Libro
        </Link>
      </div>
    </article>
  );
};

export default BookItem;
