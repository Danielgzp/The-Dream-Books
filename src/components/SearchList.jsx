import React, { useEffect, useState } from 'react'

import BookItem from './BookItem'
import UseListCharacters from '../UseListCharacters'

const SearchList = () => {

    const [characters, setCharacters] = useState([])
    const [ nextPage, setNextPage]

    useEffect(() => {
        UseListCharacters({ nextPage }).then(character => setCharacters(character))
    }, [nextPage])

    return (
        <div>
            <div>
                {characters.map(character => (
                    <BookItem character={character} />
                ))}
            </div>
        </div>
    )
}

export default SearchList
