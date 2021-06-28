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
        <main>
            <section>
                <h2>Search List</h2>
                <div>
                    {characters.map(characters => (
                        <BookItem character={characters} key={characters.id} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default SearchPage
