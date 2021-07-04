import React from 'react'
import { Link } from 'wouter'

import './styles/Publicity.css'

const Publicity = () => {
    return (
        <section>
            <div className="publicidad">
                <div className="publi1">
                    <a href="https://www.adidas.com/">
                        <figure>
                            <img src="https://i.imgur.com/TXRRN60.png" alt="Publicity Adidas"/>
                            <figcaption>Publicidad</figcaption>
                        </figure>
                    </a>
                </div>
                <div className="publi2">
                    <a href="https://www.nike.com/us/">
                        <figure>
                            <img src="https://i.imgur.com/Cfs8k1L.png" alt="Publicity Nike"/>
                            <figcaption>Publicidad</figcaption>
                        </figure>
                    </a>
                </div>
                <div className="publi3">
                    <a href="https://www.coca-cola.com.co/">
                        <figure>
                            <img src="https://i.imgur.com/CCFKVm3.jpg" alt="Publicity Coca-Cola"/>
                            <figcaption>Publicidad</figcaption>
                        </figure>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Publicity
