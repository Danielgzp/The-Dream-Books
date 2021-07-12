import React from "react";
import { Link } from "react-router-dom";

import "./styles/NotFound.css";

import errorImage from "../images/error404.png";

function NotFound() {
  return (
    <React.Fragment>
      <div className="Home_error">
        <div className="container">
          <div className="row">
            <div className="Errors_container">
              <div className="Home__col-error col-12 col-md-5">
                <h1>ERROR 404</h1>
                <h2>Page not found</h2>
                <p>
                  Lo sentimos, no hemos podido encontrar la pagina que buscabas
                </p>
                <Link to="/" className="btn btn-primary home-link">
                  Volver al inicio
                </Link>
              </div>

              <div className="Home__col-error d-none d-md-block col-md-7">
                <img
                  src={errorImage}
                  alt="Astronauts"
                  className="img-fluid p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
