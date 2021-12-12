import React, { useEffect, useMemo, useState } from "react";

import BookItem from "../components/BookItem";
import Publicity from "../components/Publicity";
import CategoriesList from "../components/CategoriesList";
import api from "../UseBooks";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

const SearchPage = (props) => {
  let bookSearch = props.match.params.bookSearch;
  bookSearch = bookSearch.replaceAll("-", " ");

  const [books, setBooks] = useState([]);
  const [state, setState] = useState({
    loading: false,
    error: null,
  });

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const data = await api.books.list("books");
        setBooks(data);
        setState({ loading: false });
      } catch (error) {
        setState({ loading: false, error: error });
      }
    }
    fetchData();
  }, []);
  const [filteredBook, setFilteredBook] = useState(books);

  useMemo(() => {
    const result = books.filter((book) => {
      return `${book.book_name}`
        .toLowerCase()
        .includes(bookSearch.toLowerCase());
    });
    setFilteredBook(result);
  }, [books, bookSearch]);

  if (state.loading) {
    return <PageLoading />;
  }
  if (state.error) {
    return <PageError />;
  }

  if (filteredBook.length === 0) {
    return (
      <main className="section">
        <div className="container">
          <div className="row">
            <div className="col l3 s12">
              <CategoriesList />
            </div>
            <div className="col l9 s12">
              <section className="section">
                <h2 className="title-books">NO SE ENCONTRÓ NINGÚN LIBRO</h2>
                <figure>
                  <img
                    src="../images/search.png"
                    alt=""
                    className="search-image"
                  />
                </figure>
              </section>
            </div>
          </div>
          <div className="row">
            <Publicity />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container">
        <div className="row">
          <div className="col l3 s12">
            <CategoriesList />
          </div>
          <div className="col l9 s12">
            <section className="section">
              <h2 className="title-books">
                resultados de la búsqueda: {bookSearch}
              </h2>
              <div>
                <ul className="list-books">
                  {filteredBook.map((book) => (
                    <li key={book.id}>
                      <BookItem book={book} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className="row">
          <Publicity />
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
