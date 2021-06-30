import React from 'react'
import { Link } from 'react-router-dom'

const BookItem = ({ book }) => {
    
    return(
        <article>
            <div className="books-container--portada">
                <Link to={`/libro/${book.id}`} >
                    <img src={book.books_image} alt="Portada del Libro" />
                </Link>
                <h3>{book.name}</h3>
            </div>
            <div className="autor">
                <Link to={`/autor/` /*aqui va link ahcia la pagian de autores*/} >{book.autor} </Link>
            </div>
            <div className="descargar">
                <Link to={`/libro/${book.id}`} >Descargar Libro</Link>
            </div>
        </article>
    )
}

export default BookItem
