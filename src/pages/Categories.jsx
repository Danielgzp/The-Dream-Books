import React, { useMemo, useState } from 'react'

import UseBooks from '../UseBooks'
import BookItem from '../components/BookItem'
import CategoriesList from '../components/CategoriesList'

const Categories = ({params}) => {

    let { categorieName } = params
    categorieName = categorieName.replaceAll("-", " ")
    
    const initialState = UseBooks({ endpoint: 'categories' })
    const categories = initialState.initial_categories
    const [filteredCategorie, setFilteredCategorie] = useState(categories)

    useMemo(() => {
        const result = categories.filter(book => {
            return `${book.categorie_name}`.toLowerCase().includes(categorieName.toLowerCase())
        })
        setFilteredCategorie(result)
    }, [categories, categorieName])

    return (
        <main>
            <CategoriesList />
            <section>
                {filteredCategorie.map(categorie => (
                    <div>
                        <h2>CATEGORIA: {categorie.categorie_name}</h2>
                        {categorie.categorie_books.map(book => (
                            <li>
                                <BookItem book={book} />
                            </li>
                        ))}
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Categories
