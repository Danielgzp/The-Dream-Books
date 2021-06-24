import React from 'react'

const Character = ({ character }) => {
    return (
        <React.Fragment>
            <div>
                <h1>{character.name}</h1>
                <img src={character.image} alt="" />
            </div>
        </React.Fragment>
    )
}

export default Character
