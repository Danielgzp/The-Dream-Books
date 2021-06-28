import React from 'react'

import CategoriesList from '../components/CategoriesList'
import BooksList from '../components/BooksList'
import Publicity from '../components/Publicity'


const Index = () => {
    return (
        <main>
                <CategoriesList />
                <BooksList />
                <Publicity />
        </main>
    )
}

export default Index
