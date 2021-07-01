import React, { useMemo, useState } from 'react'

import UseBooks from '../UseBooks'
import BookItem from '../components/BookItem'
import Publicity from '../components/Publicity'

const Authors = ({params}) => {
   
    let { autorName} = params
    autorName = autorName.replaceAll("-", " ")

    const books = UseBooks({endpoint: 'autores'})
    const autor = books.initial_autors
    const [filteredAutor, setFilteredAutor] = useState(autor)

    useMemo(() => {
        const result = autor.filter(book => {
            return `${book.autor_name}`.toLowerCase().includes(autorName.toLowerCase())
        })
        setFilteredAutor(result)
    }, [autor, autorName])

    return (
        <main>
            <section>
                <h2>{`AUTOR: ${autorName}`.toUpperCase()}</h2>
                {filteredAutor.map(autores => (
                    <div>
                        {autores.published_books.map(book => (
                            <li>
                                <BookItem book={book} key={book.id}/>
                            </li>
                        ))}
                    </div>
                ))}
            </section>
            <Publicity />
        </main>
    )

    
}

export default Authors
