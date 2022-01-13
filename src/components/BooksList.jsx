import React, { useEffect, useState } from "react";

import BookItem from "./BookItem";
import "./styles/BooksList.css";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import api from "../UseBooks";
import Swal from "sweetalert2";

const BooksList = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [books, setBooks] = useState([]);

  let [numberPage, setNumberPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const data = await api.books.listPages(numberPage);
        setBooks(data.results);
        setState({
          loading: false,
        });
      } catch (error) {
        setState({ loading: false, error: error });
      }
    }
    fetchData();
  }, [numberPage]);

  const handleClickNext = () => {
    if (numberPage >= 2) {
      Swal.fire("No hay mas libros");
    } else {
      setNumberPage((numberPage = numberPage + 1));
      async function fetchData() {
        setState({ loading: true, error: null });
        try {
          const dataNext = await api.books.listPages(numberPage);
          setBooks(dataNext.results);
          setState({
            loading: false,
          });
        } catch (error) {
          setState({ loading: false, error: error });
        }
      }
      return fetchData();
    }
  };

  const handleClickPrevPage = () => {
    if (numberPage <= 1) {
      Swal.fire("No hay mas libros");
    } else {
      async function fetchData() {
        setNumberPage((numberPage = numberPage - 1));
        setState({ loading: true, error: null });
        try {
          const dataPrev = await api.books.listPages(numberPage);
          setBooks(dataPrev.results);
          setState({
            loading: false,
          });
        } catch (error) {
          setState({ loading: false, error: error });
        }
      }

      return fetchData();
    }
  };

  if (state.loading) {
    return <PageLoading />;
  }
  if (state.error) {
    return <PageError />;
  }

  return (
    <section className="section">
      <div className="books-container">
        <h2 className="title-books">Publicaciones Recientes</h2>
        <ul className="list-books">
          {books.map((book) => (
            <li key={book.id}>
              <BookItem book={book} />
            </li>
          ))}
        </ul>

        <div className="pagination">
          <button
            type="button"
            id="page-button"
            className="btn orange"
            onClick={handleClickPrevPage}
          >
            {/* <i className="large material-icons">navigate_before</i> */}
            Prev Page
          </button>
          <button
            id="page-button"
            type="button"
            className="btn orange right"
            onClick={handleClickNext}
          >
            Next Page
            {/* <i className="large material-icons">navigate_next</i> */}
          </button>
          {/* <div className="number-pages">
                            <ul>
                                <li>
                                    <Link to="#">1</Link>
                                </li>
                                <li>
                                    <Link to="#">2</Link>
                                </li>
                                <li>
                                    <Link to="#">3</Link>
                                </li>
                                <li>
                                    <Link to="#">4</Link>
                                </li>
                                <li>
                                    <Link to="#">5</Link>
                                </li>
                                <li>
                                    <Link to="#">6</Link>
                                </li>
                                <li>
                                    <Link to="#">Ultimo</Link>
                                </li>
                            </ul>
                        </div>
                    <div className="counter-pages">
                        <p>Pagina 1 de 216</p>
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default BooksList;
