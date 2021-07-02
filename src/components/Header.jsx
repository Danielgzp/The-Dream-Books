import React, { useState } from "react";
import { useLocation, Link } from "wouter";

import Cookies from "universal-cookie";

import "./styles/Header.css";

const Header = () => {
  const cookies = new Cookies();
  const [query, setQuery] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${query.replaceAll(" ", "-")}/`);
  };

  //Se comprueba si se inicio sesión como usuario, administrador, o si aún no se ha iniciado sesión

  if (cookies.get("privilegio") === "usuario") {
    return (
      <React.Fragment>
        <header>
            <h1>Usuario</h1>
          <div className="">
            <nav className="grey darken-4">
              <Link to="/">
                <img
                  src="https://i.imgur.com/Hts1VfT.png"
                  alt="The Dream Books Logo"
                  className="responsive-img"
                />
              </Link>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  value={query}
                  placeholder="Busca entre los muchos libros disponibles..."
                  className="search-input"
                />
                <button className="" type="submit" onClick={handleSubmit}>
                  Buscar
                </button>
              </form>
      
              <ul className="right valign-wrapper">
                <li>
                  <Link to="/">
                    {" "}
                    <i></i> Todos los Libros
                  </Link>
                </li>
                <li>
                  <Link to="/salir/">
                    <i></i> Salir
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
        <h1>Admin</h1>
          <div className="">
            <nav className="grey darken-4">
              <Link to="/">
                <img
                  src="https://i.imgur.com/Hts1VfT.png"
                  alt="The Dream Books Logo"
                  className="responsive-img"
                />
              </Link>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  value={query}
                  placeholder="Busca entre los muchos libros disponibles..."
                  className="search-input"
                />
                <button className="" type="submit" onClick={handleSubmit}>
                  Buscar
                </button>
              </form>

              <ul className="right valign-wrapper">
                <li>
                  <Link to="/">
                    {" "}
                    <i></i> Todos los Libros
                  </Link>
                </li>
                <li>
                  <Link to="/salir/">
                    <i></i> Salir
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
              <Link to="/">
                <img
                  src="https://i.imgur.com/Hts1VfT.png"
                  alt="The Dream Books Logo"
                  className="responsive-img"
                />
              </Link>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  value={query}
                  placeholder="Busca entre los muchos libros disponibles..."
                  className="search-input"
                />
                <button className="" type="submit" onClick={handleSubmit}>
                  Buscar
                </button>
              </form>
              <ul className="right valign-wrapper">
                <li>
                  <Link to="/">
                    {" "}
                    <i className="icon-book"></i> Todos los Libros
                  </Link>
                </li>
                <li>
                  <Link to="/iniciar-sesion/">
                    <i className="icon-corazon"></i>Iniciar Sesión
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  }
};

export default Header;
