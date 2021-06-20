import React from 'react'
import { Link } from 'react-router-dom'

const BookItem = (props) => {

    return(
        <div>
            <div className="books-container--portada">
                <Link to={`/libro/${props.character.name}`}>
                    <img src={props.character.image} alt="" />
                </Link>
                <h3>{props.character.name}</h3>
            </div>
            <div className="autor">
                <Link to={`/libro/${props.character.id}`}>{props.character.type} </Link>
            </div>
            <div className="descargar">
                <Link to={`/libro/${props.character.name}`}>{props.character.species} {props.character.origin.name} ({props.character.status})</Link>
            </div>
        </div>
    )
}

export default BookItem
