import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesList = () => {
    return (
        <div className="main-div--aside">
                <ul className="main-aside--lista">
                    <h2 className="title-list">Literatura y Ficción</h2>
                        <ol>
                            <li className="lista-elemento"><Link to="/categories/"><span></span>Aventura</Link></li>
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 
                        </ol>
                    <h2 className="title-list">Técnico y Académicos</h2>
                        <ol>
                            <li className="lista-elemento"><Link to=""><span></span>Algo 3</Link></li> 
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li>
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li>  
                        </ol>
                    <h2 className="title-list">Vida Práctica y Otros</h2>
                        <ol>
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><span></span>Algo</Link></li> 

                        </ol>
                 </ul>
            </div>
    )
}

export default CategoriesList
