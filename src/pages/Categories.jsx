import React, { useEffect, useState } from 'react'

const Categories = () => {

    const API = 'http://localhost:3001/books'
    const [book, setBook] = useState([])

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(book => setBook(book))
    }, [])
    
    return (
        <main>
            <h1>Categorias</h1>
            {book.map(books => (
                <div>
                    <h1>{books.name}</h1>
                    <h2>{books.autor}</h2>
                    <p>{books.description}</p>
                    <img src={books.books_image} alt="" />
                </div>
            ))}
        </main>
    )
}

export default Categories
