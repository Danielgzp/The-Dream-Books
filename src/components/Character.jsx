import React, { useEffect, useState } from 'react'

import UseCharacter from '../UseCharacter'

const Character = ({ params }) => {
    console.log(params)
    
    const { numberCharacter } = params
    console.log(numberCharacter)
    const [character, setCharacter] = useState([])
    
    useEffect(() => {
        UseCharacter({ numberCharacter }).then(character => setCharacter(character))
    }, [numberCharacter])

    return (
        <div>
            <div>
                <h1>{character.name}</h1>
                <img src={character.image} alt="" />
            </div>
        </div>
    )
}

export default Character
