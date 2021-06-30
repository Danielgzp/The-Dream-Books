import React, { useEffect, useMemo, useState } from 'react'

import BookItem from '../components/BookItem'
import UseBooks from '../UseBooks'
import Publicity from '../components/Publicity'

const SearchPage = ({ params }) => {

    let { bookName } = params
    bookName = bookName.replaceAll("-", " ")

    const books = UseBooks({endpoint: 'books'})
    const librito = books.initial_books
    const [filteredBook, setFilteredBook] = useState(librito)

    useMemo(() => {
        const result = librito.filter(book => {
            return `${book.name}`.toLowerCase().includes(bookName.toLowerCase())
        })
        setFilteredBook(result)
    }, [librito, bookName])

    if (filteredBook.length === 0) {
        return (
          <div>
              <h1>Resultado de la Búsqueda: {bookName}</h1>
            <div>
                <h2>No se ha encontrado el libro que buscaba</h2>
            </div>
          </div>
        );
      }
      
    return (
        <main>
            <section>
                <h2>Resultado de la Búsqueda: {bookName}</h2>
                <div>
                    {filteredBook.map(book => (
                        <li key={book.id}> 
                            <BookItem book={book}/> 
                        </li>
                    ))}
                </div>
            </section>
            <Publicity />
        </main>
    )
}

export default SearchPage
