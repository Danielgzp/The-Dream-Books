import React, { useMemo, useState } from 'react'

import BookItem from '../components/BookItem'
import UseBooks from '../UseBooks'
import Publicity from '../components/Publicity'

const SearchPage = ({ params }) => {

    let { bookSearch } = params
    bookSearch = bookSearch.replaceAll("-", " ")

    const books = UseBooks({endpoint: 'books'})
    const librito = books.initial_books
    const [filteredBook, setFilteredBook] = useState(librito)

    useMemo(() => {
        const result = librito.filter(book => {
            return `${book.name}`.toLowerCase().includes(bookSearch.toLowerCase())
        })
        setFilteredBook(result)
    }, [librito, bookSearch])

    if (filteredBook.length === 0) {
        return (
          <div>
              <h1>Resultado de la Búsqueda: {bookSearch}</h1>
            <div>
                <h2>No se ha encontrado el libro que buscaba</h2>
            </div>
          </div>
        );
      }
      
    return (
        <main>
            <section>
                <h2>Resultado de la Búsqueda: {bookSearch}</h2>
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
