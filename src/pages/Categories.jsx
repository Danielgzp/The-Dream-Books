import React, { useEffect, useState } from 'react'

import UseBooks from '../UseBooks'

const Categories = ({params}) => {

    console.log(params)
    let { categorieName } = params
    categorieName = categorieName.replaceAll("-", " ")
    const books = UseBooks({endpoint: 'categories'})

    console.log(books)
    console.log(categorieName)

    return (
        <main>
            <h1>Categorias</h1>
            {/* {books.map(book => (
                <div>
                    <h1>{book.name}</h1>
                </div>
            ))} */}
        </main>
    )
}

export default Categories
