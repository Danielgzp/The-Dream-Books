import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

import { AppContext } from "../context/AppContext";
import "./styles/Header.css";

const Header = () => {
  const cookies = new Cookies();
  const userName = cookies.get("nombre");
  const [query, setQuery] = useState("");
  let history = useHistory();
  const { state } = useContext(AppContext);
  const { cart } = state;
  let totalPriceCar = 0;

  cart.map((book) => {
    totalPriceCar = Number(book.price) + totalPriceCar;

    return totalPriceCar;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/${query.replaceAll(" ", "-").toLowerCase()}`);
  };

  //Se comprueba si se inicio sesión como usuario, administrador, o si aún no se ha iniciado sesión

  if (cookies.get("privilegio") === "usuario") {
    return (
      <React.Fragment>
        <header>
          <div className="">
            <nav className="grey darken-4">
              <a href="/" className="link-logo">
                <img
                  src="https://i.imgur.com/Hts1VfT.png"
                  alt="The Dream Books Logo"
                  className="responsive-img logo"
                />
              </a>

              <form onSubmit={handleSubmit} className="search-form">
                <input
                  type="text"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  value={query}
                  placeholder="Busca entre los muchos libros disponibles..."
                  id="input-search"
                  required
                />
                <button
                  className="button-search right"
                  type="submit"
                  onClick={handleSubmit}
                  
                >
                  Buscar
                </button>
              </form>

              <ul className="right valign-wrapper">
                <li>
                  <Link to="/">
                    {" "}
                    <i className="material-icons left" id="icon-header">
                      book
                    </i>{" "}
                    Todos los Libros
                  </Link>
                </li>
                <li className="name-user">
                  <i className="material-icons left" id="icon-header">
                    account_circle
                  </i>
                  {userName}
                </li>
                <li>
                  <Link to="/compras">
                    <i className="material-icons left" id="icon-header">
                      shopping_cart
                    </i>
                    {cart.length > 0 ? (
                      <React.Fragment>
                        {totalPriceCar}$
                        <span className="number-shops">{cart.length}</span>
                      </React.Fragment>
                    ) : (
                      "0.00$"
                    )}
                  </Link>
                </li>
                <li>
                  <Link to="/salir/">
                    <i className="material-icons right">keyboard_tab</i> Salir
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  } else if (cookies.get("privilegio") === "administrador") {
    return (
      <React.Fragment>
        <header>
          <div className="">
            <nav className="grey darken-4">
              <a href="/" className="link-logo">
                <img
                  src="https://i.imgur.com/Hts1VfT.png"
                  alt="The Dream Books Logo"
                  className="responsive-img logo"
                />
              </a>

              <form onSubmit={handleSubmit} className="search-form">
                <input
                  type="text"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  value={query}
                  placeholder="Busca entre los muchos libros disponibles..."
                  id="input-search"
                  required
                />
                <button
                  className="button-search right"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Buscar
                </button>
              </form>

              <ul className="right valign-wrapper">
                <li>
                  <Link to="/">
                    {" "}
                    <i className="material-icons left" id="icon-header">
                      book
                    </i>{" "}
                    Todos los Libros
                  </Link>
                </li>
                <li className="add-categories">
                  <Link to="/add" className="add-categories top">
                    {" "}
                    <i className="material-icons left" id="icon-header">
                      add
                    </i>{" "}
                    Add Authors and Categories
                  </Link>
                </li>
                <li>
                  <Link to="/new/book">
                    <i className="material-icons left" id="icon-header">
                      library_add
                    </i>{" "}
                    New Book
                  </Link>
                </li>
                <li>
                  <Link to="/salir/">
                    <i className="material-icons left" id="icon-header">
                      keyboard_tab
                    </i>{" "}
                    Salir
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  } else {
    //Si nadie ha iniciado sesión se muestra:

    return (
      <React.Fragment>
        <header>
          <div className="">
            <nav className="grey darken-4">
              <a href="/" className="link-logo">
                <img
                  src="https://i.imgur.com/Hts1VfT.png"
                  alt="The Dream Books Logo"
                  className="responsive-img logo"
                />
              </a>

              <form onSubmit={handleSubmit} className="search-form">
                <input
                  type="text"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  value={query}
                  placeholder="Busca entre los muchos libros disponibles..."
                  id="input-search"
                  required
                />
                <button
                  className="button-search right"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Buscar
                </button>
              </form>

              <ul className="right valign-wrapper">
                <li>
                  <Link to="/">
                    {" "}
                    <i className="material-icons left" id="icon-header">
                      book
                    </i>{" "}
                    Todos los Libros
                  </Link>
                </li>
                <li>
                  <Link to="/iniciar-sesion/">
                    <i className="material-icons left" id="icon-header">
                      account_circle
                    </i>
                    Iniciar Sesión
                  </Link>
                </li>

                {console.log(cookies.get("nombre"))}
              </ul>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  }
};

export default Header;
