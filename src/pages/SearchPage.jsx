import React, { useEffect, useMemo, useState } from "react";

import BookItem from "../components/BookItem";
import Publicity from "../components/Publicity";
import CategoriesList from "../components/CategoriesList";
import Swal from "sweetalert2";
import api from "../UseBooks";

const SearchPage = ({ params }) => {
  let { bookSearch } = params;
  bookSearch = bookSearch.replaceAll("-", " ");

  const [books, setBooks] = useState([])
  useEffect(async () => {
    try{
      const data = await api.books.list('books')
      setBooks(data)
    }catch(error){
      console.log('Error')
    }
  }, [])
  const [filteredBook, setFilteredBook] = useState(books);

  useMemo(() => {
    const result = books.filter((book) => {
      return `${book.book_name}`.toLowerCase().includes(bookSearch.toLowerCase());
    });
    setFilteredBook(result);
  }, [books, bookSearch]);

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
