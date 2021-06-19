import React from 'react'

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <div class="header-section">
                    <div class="wrapper">
                        <div class="logo">
                            <figure class="header-figure">
                                <img src="./images/The-Dream-Books-Logo.png" alt="" />
                            </figure>
                        </div>
                
                        <div class="search-container">
                            <form class="search" action="/cuenta.html">
                                <div class="search-div">
                                    <label for="search">
                                        <input type="search" name="search" class="search-input" placeholder="Busca entre los muchos libros disponibles..." /> 
                                        <input class="input-button" type="submit" name="search-button" />
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div class="menu">
                            <h2 class="title-menu">MENÚ<a href="#" id="btn-togle--menu"><span></span></a></h2>
                                <nav class="header-nav">
                                    <ul class="header-nav--ul">
                                        <a href="<?php echo URL;?>">
                                            <li>
                                            <p>Todos los libros</p>
                                            </li>
                                        </a>
                                        <a href="#">
                                            <li>
                                                <p>Hacer una contribucion</p>
                                            </li>
                                        </a>
                                        <a href="">
                                            <li>
                                                <p>Iniciar Sesión</p>
                                            </li>
                                        </a>
                                    </ul>
                                </nav>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header
