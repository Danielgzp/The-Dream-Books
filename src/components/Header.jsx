import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <div className="navbar-fixed">
                    <nav className="grey darken-4">
                        <Link to="/">
                            <img src="https://i.imgur.com/Hts1VfT.png" alt="The Dream Books Logo" className="responsive-img" />
                        </Link>
                        
                        <input type="search" name="search" className="search-input" placeholder="Busca entre los muchos libros disponibles..." /> 
                        <button type="button">Buscar</button>

                        <ul className="right valign-wrapper">
                            <li><Link to="/"> <i className="icon-book"></i> Todos los Libros</Link></li>
                            <li><Link to="#"><i className="icon-corazon"></i> Hacer una contribucion</Link></li>
                            <li><Link to="/iniciar-sesion/">Iniciar Sesión</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header
