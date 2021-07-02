import React from 'react'
import { Link } from 'wouter'

import BookItem from './BookItem'
import './styles/BooksList.css'

import UseBooks from '../UseBooks'


function BooksList() {

    const initialState = UseBooks({ endpoint: 'books' })
    const books = initialState.initial_books
    
    return (
        <section>
            <div className="books-container">
                <h2>PUBLICACIONES RECIENTES</h2>
                <ul className="list-books--ul">
                    {books.map(book => (
                        <li>
                            <BookItem book={book} key={book.id}/>
                        </li>
                    ))} 
                </ul>

                <div className="pagination">
                    {/* <button type="button" onClick={handleClickPrev} >Prev Page</button>
                    <button type="button" onClick={handleClickNext} >Next Page</button> */}
                        <div className="number-pages">
                            <ul>
                                <li>
                                    <Link to="#">1</Link>
                                </li>
                                <li>
                                    <Link to="#">2</Link>
                                </li>
                                <li>
                                    <Link to="#">3</Link>
                                </li>
                                <li>
                                    <Link to="#">4</Link>
                                </li>
                                <li>
                                    <Link to="#">5</Link>
                                </li>
                                <li>
                                    <Link to="#">6</Link>
                                </li>
                                <li>
                                    <Link to="#">Ultimo</Link>
                                </li>
                            </ul>
                        </div>
                    <div className="counter-pages">
                        <p>Pagina 1 de 216</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BooksList

