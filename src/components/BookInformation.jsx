import React from 'react'

import './styles/BookInformation.css'

const BookInformation = () => {
    return (
        <div>
            <article className="information-container">
                <figure className="portrait-container">
                    <img src="https://imgur.com/V4gFC2a.png" alt="Portada del Libro" className="responsive-image" />
                    <figcaption>Nombre del Libro</figcaption>
                </figure>
                <div>
                    <h4>Autor</h4>
                    <a href="">Link de Descarga</a>
                </div>
                <div>
                    <p>
                        descripcion del libro
                    </p>
                </div>
            </article>
        </div>
    )
}

export default BookInformation
