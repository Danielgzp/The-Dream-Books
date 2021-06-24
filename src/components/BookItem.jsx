import React, { useEffect } from 'react'
import { Link, Route } from 'react-router-dom'

import UseCharacter from '../UseCharacter'

const BookItem = ({ character }) => {
    
    return(
        <div>
            <div className="books-container--portada">
                <Link to={`/libro/${character.name}`} >
                    <img src={character.image} alt="" />
                </Link>
                <h3>{character.name}</h3>
            </div>
            <div className="autor">
                <Link to={`/libro/${character.name}`} >{character.type} </Link>
            </div>
            <div className="descargar">
                <Link to={`/libro/${character.name}`} >{character.species} {character.origin.name} ({character.status})</Link>
            </div>
        </div>
    )
}

export default BookItem
