import React, { useEffect, useState } from 'react'

import UseBooks from '../UseBooks'

const Authors = () => {
   
    const books = UseBooks({endpoint: 'autores'})

    return (
        
        <div>
            <h1>Libros del autor</h1>
            {books.initial_autors.map(book => (
                <div>
                    <h2>{book.autor_name}</h2>
                    <div>
                        {book.published_books.map(books => (
                            <img src={books.books_image} alt="" />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )

    
}

export default Authors
