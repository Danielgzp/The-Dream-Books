import React from 'react'

const Character = ({ character }) => {
    return (
        <React.Fragment>
            <article>
                <h1>{character.name}</h1>
                <img src={character.image} alt="Portada del Libro" />
            </article>
        </React.Fragment>
    )
}

export default Character
