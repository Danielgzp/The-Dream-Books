import React from 'react'
import { Link } from 'react-router-dom'

import nike from '../images/nike.png'
import mcdonals from '../images/mcdonalds.png'
import cocacola from '../images/publicidad-coca-cola.jpg'


const Publicity = () => {
    return (
        <div className="publicidad">
            <div className="publi1">
                <Link to="">
                    <figure>
                        <img src={nike} alt=""/>
                        <figcaption>Publicidad</figcaption>
                    </figure>
                </Link>
            </div>
            <div className="publi2">
                <Link to="">
                    <figure>
                        <img src={mcdonals} alt=""/>
                        <figcaption>Publicidad</figcaption>
                    </figure>
                </Link>
            </div>
            <div className="publi3">
                <Link to="">
                    <figure>
                        <img src={cocacola} alt=""/>
                        <figcaption>Publicidad</figcaption>
                    </figure>
                </Link>
            </div>
        </div>
    )
}

export default Publicity
