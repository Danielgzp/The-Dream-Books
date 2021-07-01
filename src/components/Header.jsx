import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'wouter'

import './styles/Header.css'

const Header = () => {

    const [query, setQuery] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = (event) => {
        event.preventDefault()
        pushLocation(`/search/${query.replaceAll(" ", "-")}/`)
    }

    return (
        <React.Fragment>
            <header>
                <div className="navbar-fixed">
                    <nav className="grey darken-4">
                        <Link to="/">
                            <img src="https://i.imgur.com/Hts1VfT.png" alt="The Dream Books Logo" className="responsive-img" />
                        </Link>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text"  
                                onChange={e => {
                                    setQuery(e.target.value)
                                }}  
                                value={query}
                                placeholder="Busca entre los muchos libros disponibles..."
                                className="search-input"
                                />
                            <button className="" type="submit" onClick={handleSubmit}>Buscar</button>
                        </form>  
                        <ul className="right valign-wrapper">
                            <li><Link to="/"> <i className="icon-book"></i> Todos los Libros</Link></li>
                            <li><Link to="/iniciar-sesion/"><i className="icon-corazon"></i>Iniciar Sesión</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header
