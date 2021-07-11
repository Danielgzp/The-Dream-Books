import React from 'react'

import CategoriesList from '../components/CategoriesList'
import BooksList from '../components/BooksList'
import Publicity from '../components/Publicity'


  

const Index = () => {

      
    return (
        <main className="container">
            <div className="row">
                <div className="col l3 s12">
                    <CategoriesList />
                </div>
                <div className="col l9 s12">
                    <BooksList />
                </div>
                </div>
                <div className="row">
                    <Publicity />
                </div>
        </main>
    )
}

export default Index
