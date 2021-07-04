import React, { useMemo, useState } from "react";
import { Link } from "wouter";

import BookItem from "../components/BookItem";
import CategoriesList from "../components/CategoriesList";
import UseBooks from "../UseBooks";
import './styles/Books.css'

import Cookies from "universal-cookie";
import Swal from "sweetalert2";

const Books = ({ params }) => {
  const cookies = new Cookies();

  let { bookName } = params;
  bookName = bookName.replaceAll("-", " ");

  const initialState = UseBooks({ endpoint: "books" });
  const initialStateAutor = UseBooks({ endpoint: "autores" });
  const book = initialState.initial_books;
  const autor = initialStateAutor.initial_autors;
  const [filteredBook, setFilteredBook] = useState(book);
  const [filteredAutor, setFilteredAutor] = useState(autor);

  var paramsBookAutor = "";
  filteredBook.find((librito) => (paramsBookAutor = librito.autor));

  useMemo(() => {
    const result = book.filter((libro) => {
      return `${libro.name}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(bookName.toLowerCase());
    });

    const results = autor.filter((book) => {
      return `${book.autor_name}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(paramsBookAutor.toLowerCase());
    });

    setFilteredBook(result);
    setFilteredAutor(results);
  }, [book, autor, bookName, paramsBookAutor]);

  const handleClick = () => {
    if (
      cookies.get("privilegio") !== "administrador" ||
      cookies.get("privilegio") !== "usuario"
    ) {
      Swal.fire("Debes crear una cuenta para poder acceder a los libros");
    }
  };

  return (
    <React.Fragment>
      <main className="container">
        <div className="row">
          <div className="col l3 s12">
            <CategoriesList />
          </div>
          <div className="col l9 s12">
            <section>
              {filteredBook.map((book) => (
                <div>
                  <div>
                    <h2 className="book-title">{book.name}</h2>
                    <Link to={`/autor/${book.autor}/`} className="autor-name">
                      {book.autor}
                    </Link>
                    <figure>
                      <img src={book.books_image} alt="Portada del Libro" className="responsive-img book-image"/>
                    </figure>
                  </div>

                  <div>
                    {cookies.get("privilegio") !== "administrador" ||
                    cookies.get("privilegio") !== "usuario" ? (
                      <div>
                        <a href="#!" onClick={handleClick}>
                          DESCARGAR PDF
                        </a>
                        <Link to="#!">LEER ONLINE</Link>
                      </div>
                    ) : (
                      <div>
                        <a href={book.download}>DESCARGAR PDF</a>
                        <Link to="#!">LEER ONLINE</Link>
                      </div>
                    )}
                  </div>

                  <div className="description-book">
                    <h2>DESCRIPCIÓN</h2>
                    <p>{book.description}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <section>
            <div>
              <h2 className="title-books">LIBROS DEL MISMO AUTOR</h2>
              <ul className="list-books">
                {filteredAutor.map((autor) => (
                  <li>
                    {autor.published_books.map((book) => (
                      <BookItem book={book} key={book.id} />
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Books;
