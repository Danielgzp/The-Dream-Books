import React from 'react'
import { Link, Route } from 'wouter'

const BookItem = (props) => {

    return(
        <div>
            <div className="books-container--portada">
                <Link to="/libro/2">
                    <img src={props.character.image} alt="" />
                </Link>
                <h3>{props.character.name}</h3>
            </div>
            <div className="autor">
                <Link to="/libro/10">{props.character.type} </Link>
            </div>
            <div className="descargar">
                <Link to="/libro/15">{props.character.species} {props.character.origin.name} ({props.character.status})</Link>
            </div>
        </div>
    )
}

export default BookItem
