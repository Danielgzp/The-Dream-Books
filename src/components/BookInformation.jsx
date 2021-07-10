import React from 'react'

import './styles/BookInformation.css'

const BookInformation = ({ book }) => {
    
    return (
        <div>
            <article className="information-container">
                <figure className="portrait-container">
                    <img src={book.books_image} alt="Portada del Libro" className="responsive-image" />
                    <figcaption>{book.book_name}</figcaption>
                </figure>
                <div>
                    <h4>{book.autor}</h4>
                    <a href={book.download}>{book.download}</a>
                </div>
                <div>
                    <p>
                    {book.description}
                    </p>
                </div>
            </article>
        </div>
    )
}

export default BookInformation
