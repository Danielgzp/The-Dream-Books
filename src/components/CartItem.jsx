import React from "react";

import "./styles/CartItem.css";

const BuyBooks = ({ book, handleRemove }) => {
  return (
    <React.Fragment>
      <article className="buy-book__container section col l6 s12">
        <div className="buy-image__container">
          <img
            src={book.books_image}
            alt="Portada del libro"
            className="buy-book__portrait"
          />
        </div>
        <div className="buy-info__container">
          <h2>{book.book_name}</h2>
          <h3>{book.autor}</h3>
          <span>
            {book.price}
            <i className="material-icons">attach_money</i>
          </span>
          <button type="button" id="remove-book__cart"className="btn cancel-button" onClick={handleRemove}>Remove Book</button>
        </div>
      </article>
    </React.Fragment>
  );
};

export default BuyBooks;
