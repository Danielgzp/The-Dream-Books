import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import BookItem from "../components/BookItem";
import CategoriesList from "../components/CategoriesList";
import api from "../UseBooks";
import "./styles/Books.css";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import { AppContext } from "../context/AppContext";

const Books = (props) => {
  const { addToCart } = useContext(AppContext);

  const cookies = new Cookies();

  let bookName = props.match.params.bookName;
  bookName = bookName.replaceAll("-", " ");

  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState({
    loading: false,
    error: null,
  });
  const [autor, setAutor] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading({ loading: true, error: null });
      try {
        const data = await api.books.list("books");
        const autorData = await api.books.list("autores");
        setBook(data);
        setAutor(autorData);
        setLoading({ loading: false });
      } catch (error) {
        setLoading({ loading: false, error: error });
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

  const handleClickAddToCart = () => {
    addToCart(filteredBook[0]);
  };

  if (loading.loading) {
    return <PageLoading />;
  }
  if (loading.error) {
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
            <section className="section col l9 s12" key={"i"}>
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
                <figure className="book-image__container left">
                  <img
                    src={book.books_image}
                    alt="Portada del Libro"
                    className="responsive-img book-image left"
                  />
                </figure>
              </div>

              {cookies.get("privilegio") === "administrador" ||
              cookies.get("privilegio") === "usuario" ? (
                <div className="downloads-container bottom">
                  <button
                    type="button"
                    className="btn download-button"
                    onClick={handleClickAddToCart}
                  >
                    <i className="large material-icons">add</i>
                    <span className="add-text">AÑADIR AL CARRO</span>
                  </button>

                  <span className="book-price">
                    {book.price} <i className="material-icons">attach_money</i>
                  </span>
                </div>
              ) : (
                <div className="downloads-container">
                  <button
                    type="button"
                    className="btn download-button"
                    onClick={handleClick}
                  >
                    <i className="large material-icons">add</i>
                    <span className="add-text">AÑADIR AL CARRO</span>
                  </button>

                  <span className="book-price">
                    {book.price}
                    <i className="material-icons">attach_money</i>
                  </span>
                </div>
              )}
              <div className="description-book">
                <h2>DESCRIPCIÓN</h2>
                <p>{book.description}</p>
              </div>
              <div className="author-books__list">
                <h2 className="title-books">LIBROS DEL MISMO AUTOR</h2>
                <ul className="list-books">
                  {filteredAutor.map((autor) => (
                    <React.Fragment key={autor.autor_name}>
                      {autor.published_books.map((book) => (
                        <li key={book.id}>
                          <BookItem book={book} />
                        </li>
                      ))}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Books;
