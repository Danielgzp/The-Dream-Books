import React from 'react'
import { Link } from 'react-router-dom'

const BookItem = ({ character }) => {
    
    return(
        <article>
            <div className="books-container--portada">
                <Link to={`/libro/${character.id}`} >
                    <img src={character.image} alt="Portada del Libro" />
                </Link>
                <h3>{character.name}</h3>
            </div>
            <div className="autor">
                <Link to={`/libro/${character.id}` /*aqui va link ahcia la pagian de autores*/} >{character.species} </Link>
            </div>
            <div className="descargar">
                <Link to={`/libro/${character.id}`} >Descargar Libro</Link>
            </div>
        </article>
    )
}

export default BookItem
