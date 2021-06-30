import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import UseBooks from '../UseBooks'

import './styles/CategoriesList.css'

const CategoriesList = () => {

    const books_categories = UseBooks({endpoint: 'categories'})

    return (
        <aside>
            <div className="main-div--aside">
                <ul className="main-aside--lista">
                    <h2 className="title-list">Literatura y Ficcion</h2>
                        <ol>
                            {books_categories.initial_categories.literatura_ficcion.map(title => (
                                <li className="lista-elemento"><Link to="/categories/"><i className="down-arrow"></i>{title.sub_categorie_name}</Link></li>
                            ))}
                        </ol>
                    <h2 className="title-list">Tecnico y Academicos</h2>
                        <ol>
                        {books_categories.initial_categories.vida_practica.map(title => (
                                <li className="lista-elemento"><Link to="/categories/"><i className="down-arrow"></i>{title.sub_categorie_name}</Link></li>
                            ))}
                        </ol>
                    <h2 className="title-list">Vida Practica y Otros</h2>
                        <ol>
                            {books_categories.initial_categories.tecnico_academicos.map(title => (
                                <li className="lista-elemento"><Link to="/categories/"><i className="down-arrow"></i>{title.sub_categorie_name}</Link></li>
                            ))}
                        </ol>
                </ul>
            </div>
        </aside>
    )
}

export default CategoriesList
