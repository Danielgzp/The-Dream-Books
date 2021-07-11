import React, { useEffect, useMemo, useState } from "react";

import api from "../UseBooks";
import BookItem from "../components/BookItem";
import CategoriesList from "../components/CategoriesList";
import Publicity from "../components/Publicity";

const Categories = (props) => {
  console.log(props);
  let categorieName = props.match.params.categorieName;
  // categorieName = categorieName.replaceAll("-", " ");
  console.log(categorieName);

  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    try {
      const data = await api.books.list("categories");
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const [filteredCategorie, setFilteredCategorie] = useState(categories);

  useMemo(() => {
    const result = categories.filter((book) => {
      return `${book.categorie_name}`
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(categorieName.toLowerCase().replaceAll("-", " "));
    });
    setFilteredCategorie(result);
  }, [categories, categorieName]);

  return (
    <main className="container">
      <div className="row">
        <div className="col l3 s12">
          <CategoriesList />
        </div>
        <div className="col l9 s12">
          <section>
            {filteredCategorie.map((categorie) => (
              <div>
                <h2 className="title-books">
                  CATEGORIA: {categorie.categorie_name}
                </h2>
                <ul className="list-books">
                  {categorie.categorie_books.map((book) => (
                    <li>
                      <BookItem book={book} />
                    </li>
                  ))}
                </ul>
              </div>
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

export default Categories;
