import React from 'react'
import { Link } from 'react-router-dom'

const Publicity = () => {
    return (
        <section>
            <div className="publicidad">
                <div className="publi1">
                    <Link to="">
                        <figure>
                            <img src="https://i.imgur.com/TXRRN60.png" alt="Publicty"/>
                            <figcaption>Publicidad</figcaption>
                        </figure>
                    </Link>
                </div>
                <div className="publi2">
                    <Link to="">
                        <figure>
                        <img src="https://i.imgur.com/Cfs8k1L.png" alt="Publicty"/>
                            <figcaption>Publicidad</figcaption>
                        </figure>
                    </Link>
                </div>
                <div className="publi3">
                    <Link to="">
                        <figure>
                            <img src="https://i.imgur.com/CCFKVm3.jpg" alt="Publicty"/>
                            <figcaption>Publicidad</figcaption>
                        </figure>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Publicity
