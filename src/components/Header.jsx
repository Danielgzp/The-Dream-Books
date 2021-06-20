import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/The-Dream-Books-Logo.png'

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <div className="navbar-fixed">
                    <nav className="grey darken-4">
                        
                        <img src={logo} alt="The Dream Books Logo" className="responsive-img" />
                       
                        <input type="search" name="search" className="search-input" placeholder="Busca entre los muchos libros disponibles..." /> 
                        <button type="button">Buscar</button>
                        <ul className="right valign-wrapper">
                            <li><Link to="/"> <i></i> Todos los Libros</Link></li>
                            <li><Link to="#"><i></i> Hacer una contribucion</Link></li>
                            <li><Link to="/iniciar-sesion"><i></i> Iniciar Sesión</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header
