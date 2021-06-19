import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/The-Dream-Books-Logo.png'

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <div class="navbar-fixed">
                    <nav class="grey darken-4">
                        <a href="#" class="brand-logo">
                            <img src={logo} alt="The Dream Books Logo" className="responsive-img" />
                        </a>
                        <input type="search" name="search" class="search-input" placeholder="Busca entre los muchos libros disponibles..." /> 
                        <button type="button">Buscar</button>
                        <ul class="right valign-wrapper">
                            <li><Link to="/">Todos los Libros</Link></li>
                            <li><Link to="#">Hacer una contribucion</Link></li>
                            <li><Link to="/iniciarsesion">Iniciar Sesión</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header
