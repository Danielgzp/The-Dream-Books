import React from "react";

import "./styles/Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h4 className="">The Dream Books</h4>
              <p className="footer-info">
                Esta pagina fue desarrollada con el objetivo de trabajar el
                proyecto de la materia de Algoritmo y Programacion II.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h4 className="">Redes</h4>
              <ul className="footer-list">
                <li>
                  <a
                    className="valign-wrapper"
                    href="https://www.facebook.com/juan.escobar.944"
                  >
                    Facebook <span className="facebook"></span>
                  </a>
                </li>
                <li>
                  <a
                    className="valign-wrapper"
                    href="https://www.instagram.com/blackstorecargas/"
                  >
                    Instagram <span className="instagram"></span>
                  </a>
                </li>
                <li>
                  <a
                    className="valign-wrapper"
                    href="https://github.com/Danielgzp"
                  >
                    Github<span className="github"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright black">
          <p className="grey-text text-lighten-3">
            Hecho por los panas © 2021 The Dream Books. Todos los derechos. El
            mejor lugar para descargar los libros mas famosos en PDF.
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
