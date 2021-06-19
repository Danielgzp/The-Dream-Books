import React from 'react'

import CategoriesList from '../components/CategoriesList'
import BooksList from '../components/BooksList'
import Publicity from '../components/Publicity'

const Index = () => {
    return (
        <div>
            <aside>
                <CategoriesList />
            </aside>
            <BooksList />
            <Publicity />

        </div>
    )
}

export default Index
