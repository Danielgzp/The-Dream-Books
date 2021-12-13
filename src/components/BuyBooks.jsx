import React from 'react'

import "./styles/BuyBooks.css"

const BuyBooks = ({book}) => {
    return (
      <React.Fragment>
        <article className="buy-book__container section col l6 s12">
          <div className="buy-image__container">
            <img src={book.books_image} alt="Portada del libro" className="buy-book__portrait" />
          </div>
          <div className="buy-info__container">
            <h2>{book.book_name}</h2>
            <h3>{book.autor}</h3>
            <span>
              Price: 4.99
              <i className="material-icons">attach_money</i>
            </span>
          </div>
        </article>
      </React.Fragment>
    );
}

export default BuyBooks

