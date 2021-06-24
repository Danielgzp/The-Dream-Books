import React, { useEffect, useState } from 'react'

import CategoriesList from '../components/CategoriesList'
import BooksList from '../components/BooksList'
import Publicity from '../components/Publicity'

import UseCharacter from '../UseCharacter'

const Index = () => {
    // console.log(params)
    // const { numberCharacter } = params
    // console.log(numberCharacter)
    // const [character, setCharacter] = useState([])
    
    // useEffect(() => {
    //     UseCharacter({ numberCharacter }).then(character => setCharacter(character))
    // }, [numberCharacter])

    return (
        <div>
            <aside>
                <CategoriesList />
            </aside>
            <BooksList />
            <Publicity />
        </div>
    )
}

export default Index
