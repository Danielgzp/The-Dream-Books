import React from 'react'
import { Link } from 'react-router-dom'

const BookItem = ({ character }) => {
    
    return(
        <div>
            <div className="books-container--portada">
                <Link to={`/libro/${character.id}`} >
                    <img src={character.image} alt="" />
                </Link>
                <h3>{character.name}</h3>
            </div>
            <div className="autor">
                <Link to={`/libro/${character.id}`} >{character.type} </Link>
            </div>
            <div className="descargar">
                <Link to={`/libro/${character.id}`} >{character.species} {character.origin.name} ({character.status})</Link>
            </div>
        </div>
    )
}

export default BookItem
