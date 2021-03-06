import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import BookItem from "../components/BookItem";
import CategoriesList from "../components/CategoriesList";
import api from "../UseBooks";
import "./styles/Books.css";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import Cookies from "universal-cookie";
import Swal from "sweetalert2";

const Books = (props) => {
  const cookies = new Cookies();

  let bookName = props.match.params.bookName;
  bookName = bookName.replaceAll("-", " ");

  const [book, setBook] = useState([]);
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [autor, setAutor] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const data = await api.books.list("books");
        const autorData = await api.books.list("autores");
        setBook(data);
        setAutor(autorData);
        setState({ loading: false });
      } catch (error) {
        setState({ loading: false, error: error });
      }
    }
    fetchData();
  }, []);

  const [filteredBook, setFilteredBook] = useState(book);
  const [filteredAutor, setFilteredAutor] = useState(autor);

  var paramsBookAutor = "";
  filteredBook.find((librito) => (paramsBookAutor = librito.autor));

  useMemo(() => {
    const result = book.filter((libro) => {
      return `${libro.book_name}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(bookName.toLowerCase());
    });

    const results = autor.filter((book) => {
      return `${book.autor_name}`
        .toLowerCase()
        .normalize("NFD")
        .replace(/[?¿¡!\u0300-\u036f]/g, "")
        .includes(paramsBookAutor.toLowerCase());
    });

    setFilteredBook(result);
    setFilteredAutor(results);
  }, [book, autor, bookName, paramsBookAutor]);

  const handleClick = () => {
    if (
      cookies.get("privilegio") === "administrador" ||
      cookies.get("privilegio") === "usuario"
    ) {
      Swal.fire("Descargando el libro");
    } else {
      Swal.fire("Debes crear una cuenta para poder acceder a los libros");
    }
  };

  if (state.loading) {
    return <PageLoading />;
  }
  if (state.error) {
    return <PageError />;
  }

  return (
    <React.Fragment>
      <main className="container">
        <div className="row">
          <div className="col l3 s12">
            <CategoriesList />
          </div>

          {filteredBook.map((book) => (
            <section className="section col l9 s12">
              <div className="details-book col l12 s12 left">
                <h2 className="book-title">{book.book_name}</h2>
                <Link
                  to={`/autor/${book.autor}`
                    .toLowerCase()
                    .replaceAll(" ", "-")
                    .normalize("NFD")
                    .replace(/[?¿¡!\u0300-\u036f]/g, "")}
                  className="autor-name"
                >
                  {book.autor}
                </Link>

                <img
                  src={book.books_image}
                  alt="Portada del Libro"
                  className="responsive-img book-image"
                />
              </div>

              {cookies.get("privilegio") === "administrador" ||
              cookies.get("privilegio") === "usuario" ? (
                <div className="downloads-container bottom">
                  <a
                    href={book.download}
                    className="btn download-button"
                    onClick={handleClick}
                  >
                    <i className="material-icons">file_download</i>DESCARGAR PDF
                  </a>
                  <a
                    href="#!"
                    className="btn read-button"
                    onClick={handleClick}
                  >
                    <i className="material-icons">description</i> LEER ONLINE
                  </a>
                </div>
              ) : (
                <div className="downloads-container">
                  <a
                    href="#!"
                    className="btn download-button"
                    onClick={handleClick}
                  >
                    <i className="material-icons">file_download</i>DESCARGAR PDF
                  </a>
                  <a
                    href="#!"
                    className="btn read-button"
                    onClick={handleClick}
                  >
                    <i className="material-icons">description</i> LEER ONLINE
                  </a>
                </div>
              )}

              <div className="description-book">
                <h2>DESCRIPCIÓN</h2>
                <p>{book.description}</p>
              </div>
            </section>
          ))}
        </div>

        <div className="row">
          <div className="col l12 s12">
            <section className="section ">
              <h2 className="title-books">LIBROS DEL MISMO AUTOR</h2>

              {filteredAutor.map((autor) => (
                <ul className="list-books">
                  {autor.published_books.map((book) => (
                    <li>
                      <BookItem book={book} key={book.id} />
                    </li>
                  ))}
                </ul>
              ))}
            </section>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Books;
