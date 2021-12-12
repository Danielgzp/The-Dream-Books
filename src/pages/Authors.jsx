import React, { useEffect, useMemo, useState } from "react";

import BookItem from "../components/BookItem";
import Publicity from "../components/Publicity";
import CategoriesList from "../components/CategoriesList";
import api from "../UseBooks";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

const Authors = (props) => {
  let autorName = props.match.params.autorName;
  autorName = autorName.replaceAll("-", " ");

  const [autor, setAutor] = useState([]);
  const [state, setState] = useState({
    loading: false,
    error: null,
  });

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const data = await api.books.list("autores");
        setAutor(data);
        setState({ loading: false });
      } catch (error) {
        setState({ loading: false, error: error });
      }
    }
    fetchData();
  }, []);

  const [filteredAutor, setFilteredAutor] = useState(autor);

  useMemo(() => {
    const result = autor.filter((book) => {
      return `${book.autor_name}`
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(autorName.toLowerCase());
    });
    setFilteredAutor(result);
  }, [autor, autorName]);

  if (state.loading) {
    return <PageLoading />;
  }
  if (state.error) {
    return <PageError />;
  }

  return (
    <main className="container">
      <div className="row">
        <div className="col l3 s12">
          <CategoriesList />
        </div>
        <div className="col l9 s12">
          <section className="section">
            <h2 className="title-books">
              {`AUTOR: ${autorName}`.toUpperCase()}
            </h2>
            {filteredAutor.map((autores) => (
              <ul className="list-books" key="lista">
                {autores.published_books.map((book) => (
                  <li key={book.id}>
                    <BookItem book={book} />
                  </li>
                ))}
              </ul>
            ))}
          </section>
        </div>
      </div>
      <div className="row">
        <Publicity />
      </div>
    </main>
  );
};

export default Authors;
