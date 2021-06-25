import React, { useEffect, useState } from 'react'

import Character from '../components/Character'
import UseCharacter from '../UseCharacter'

const Books = ({ params }) => {

    console.log(params)
    const { numberCharacter } = params
    console.log(numberCharacter)
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        UseCharacter({ numberCharacter }).then(character => setCharacter(character), setLoading(false))
    }, [numberCharacter])
    

    /*hice algunso cambios aqui para proabr ciertas cosas*/
    return (
        <div>   
            <div>
                <h1>Books</h1>
                {loading && (
                    <h1>Cargandoo</h1>
                )}
                <Character character={character} />
            </div>
        </div>
    )
}

export default Books
