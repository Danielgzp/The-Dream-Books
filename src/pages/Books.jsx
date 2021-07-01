import React, { useMemo, useState } from 'react'
import { Link } from 'wouter'

import BookItem from '../components/BookItem'
import CategoriesList from '../components/CategoriesList'
import UseBooks from '../UseBooks'

const Books = ({ params}) => {

    let { bookName} = params
    bookName = bookName.replaceAll("-", " ")

    const initialState = UseBooks({endpoint: 'books'})
    const book = initialState.initial_books
    
    const [filteredBook, setFilteredBook] = useState(book)

    useMemo(() => {
        const result = book.filter(libro => {
            return `${libro.name}`.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase().includes(bookName.toLowerCase())
        })
        setFilteredBook(result)
    }, [book, bookName])


    const initialStateAutor = UseBooks({endpoint: 'autores'})
    const autor = initialState.initial_autors
    const [filteredAutor, setFilteredAutor] = useState(autor)
    
    // useMemo(() => {
    //     const results = autor.filter(book => {
    //         return `${book.autor_name}`.toLowerCase().includes(bookName.toLowerCase())
    //     })
    //     setFilteredAutor(results)
    // }, [autor, bookName])

    /*hice algunso cambios aqui para proabr ciertas cosas*/
    
    return (
        <React.Fragment>
        <main>   
            <CategoriesList />
                {filteredBook.map(book => (
                    <section key={book.id}>
                        <div>
                            <h2>{book.name}</h2>
                            <Link to={`/autor/${book.autor}/`}><strong>{book.autor}</strong></Link>
                            <figure>
                                <img src={book.books_image} alt="Portada del Libro" />
                            </figure>
                        </div>
                        <div>
                            <a href={book.download}>DESCARGAR PDF</a>
                            <Link to="#">LEER ONLINE</Link>
                        </div>
                        <div>
                            <h2>Descripcion</h2>
                            <p>{book.description}</p>
                        </div>
                        <div>
                            <h2>LIBROS DEL MISMO AUTOR</h2>
                            {/* <ul>
                                {filteredAutor.map(autor_book => (
                                    <li>
                                        <BookItem book={autor_book} />
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                    </section>
                ))}
        </main>
        </React.Fragment>
    )
}

export default Books
