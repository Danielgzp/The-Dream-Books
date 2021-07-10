import React, { useEffect, useMemo, useState } from "react";

import BookItem from "../components/BookItem";
import Publicity from "../components/Publicity";
import CategoriesList from "../components/CategoriesList";
import api from "../UseBooks";

const Authors = ({ params }) => {
  let { autorName } = params;
  autorName = autorName.replaceAll("-", " ");

  const [autor, setAutor] = useState([]);

  useEffect(async () => {
    try {
      const data = await api.books.list("autores");
      setAutor(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [filteredAutor, setFilteredAutor] = useState(autor);

  useMemo(() => {
    const result = autor.filter((book) => {
      return `${book.autor_name}`
        .toLowerCase()
        .includes(autorName.toLowerCase());
    });
    setFilteredAutor(result);
  }, [autor, autorName]);

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
              <ul className="list-books">
                {autores.published_books.map((book) => (
                  <li>
                    <BookItem book={book} key={book.id} />
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
