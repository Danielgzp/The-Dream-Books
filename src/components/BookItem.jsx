import React from 'react'
import { Link, Route } from 'wouter'

const BookItem = ({ character, numberCharacter }) => {

    numberCharacter = character.id

    return(
        <div>
            <div className="books-container--portada">
                <a href="http://descargar.lelibros.online/William%20Faulkner/Mientras%20Agonizo%20(515)/Mientras%20Agonizo%20-%20William%20Faulkner.pdf" >
                    <img src={character.image} alt="" />
                </a>
                <h3>{character.name}</h3>
            </div>
            <div className="autor">
                <a href="http://descargar.lelibros.online/William%20Faulkner/La%20Escapada%20(534)/La%20Escapada%20-%20William%20Faulkner.pdf">{character.type} </a>
            </div>
            <div className="descargar">
                <Link to="http://descargar.lelibros.online/William%20Faulkner/La%20Escapada%20(534)/La%20Escapada%20-%20William%20Faulkner.pdf">{character.species} {character.origin.name} ({character.status})</Link>
            </div>
        </div>
    )
}

export default BookItem
