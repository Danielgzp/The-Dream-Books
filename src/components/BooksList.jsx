import React, { useEffect, useState } from "react";

import BookItem from "./BookItem";
import "./styles/BooksList.css";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import api from "../UseBooks";

const BooksList = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true, error: null });

      try {
        const data = await api.books.list("books");
        setBooks(data);
        setState({
          loading: false,
        });
      } catch (error) {
        setState({ loading: false, error: error });
      }
    }
    fetchData();
  }, []);

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

        {/* <div className="pagination">
                    <button type="button" onClick={handleClickPrev} >Prev Page</button>
                    <button type="button" onClick={handleClickNext} >Next Page</button> 
                        <div className="number-pages">
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
                    </div>
                </div> */}
      </div>
    </section>
  );
};

export default BooksList;
