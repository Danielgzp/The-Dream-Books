import React, { useEffect, useState } from 'react'

import UseBooks from '../UseBooks'

const Authors = () => {
   
    const books = UseBooks({endpoint: 'categories'})

    return (
        
        <div>
            <h1>Libros del autor</h1>
            {books.initial_categories.literatura_ficcion.aventura.map(book => (
                <div key={book.id}>
                    <h2>{book.name}</h2>
                </div>
            ))}
        </div>
    )

    
}

export default Authors
