import React from 'react'
import { Link } from 'react-router-dom'

const BookItem = ({ book }) => {
    return(
        <article>
            <div className="libro-imagen">
                <Link className="" to={`/libro/${book.name}/`.toLowerCase().replaceAll(" ", "-").toLowerCase().normalize('NFD').replace(/[?¿¡!\u0300-\u036f]/g,"")} >
                    <img src={book.books_image} alt="Portada del Libro" />
                </Link>
                <h3>{book.name}</h3>
            </div>
            <div className="autor">
                <Link className="" to={`/autor/${book.autor}/`.toLowerCase().replaceAll(" ", "-")} >{book.autor} </Link>
            </div>
            <div className="descargar">
                <Link className="" to={`/libro/${book.name}/`.toLowerCase().replaceAll(" ", "-").normalize('NFD').replace(/[?¿¡!\u0300-\u036f]/g,"")} >Descargar Libro</Link>
            </div>
        </article>
    )
}

export default BookItem
