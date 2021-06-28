import React, { useEffect, useState } from 'react'

import BookItem from '../components/BookItem'
import UseListCharacters from '../UseListCharacters'

const SearchPage = ({ params }) => {

    console.log(params)
    const { numberPage } = params
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        UseListCharacters({ numberPage }).then(characters => setCharacters(characters))
    }, [numberPage])

    return (
        <div>
            <h1>Search Page</h1>
            <h1>Searh List</h1>
                {characters.map(characters => (
                    <BookItem character={characters} key={characters.id} />
                ))}
        </div>
    )
}

export default SearchPage
