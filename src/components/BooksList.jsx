import React, { useEffect, useState } from 'react'

import BookItem from './BookItem'

import Swal from '../../node_modules/sweetalert2/dist/sweetalert2.all'

import { Link, useLocation } from 'wouter'
import UseBooks from '../UseBooks'

export default function BooksList() {
     
    const books = UseBooks({ endpoint: 'books' })
    
    // const [path, pushLocation] = useLocation()

    // const handleSubmit = event => {
    //     event.preventDefault()
    //     pushLocation(`/search/1`)
    // }
    
    // const handleChange = event => {
    //     // setNumberCharacter(event.target.value)
    // }

    return (
        <section>
            <h2>Publicaciones Recientes</h2>
            <div className="books-container">
                {/* <h2>Search Character</h2>
                <form onSubmit={handleSubmit} >
                    <input 
                        type="text" 
                        value={numberCharacter} 
                        onChange={handleChange}  
                        placeholder="Search Character..." 
                        />
                </form> */}
                <ul className="list-books--ul">
                    {books.initial_books.map(book => (
                            <li key={book.id}>
                                <BookItem book={book} />
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

