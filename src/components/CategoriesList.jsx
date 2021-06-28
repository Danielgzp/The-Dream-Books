import React from 'react'
import { Link } from 'react-router-dom'

import './styles/CategoriesList.css'

const CategoriesList = () => {
    return (
        <aside>
            <div className="main-div--aside">
                <ul className="main-aside--lista">
                    <h2 className="title-list">Literatura y Ficción</h2>
                        <ol>
                            <li className="lista-elemento"><Link to="/categories/"><i className="down-arrow"></i>Aventura</Link></li>
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 
                        </ol>
                    <h2 className="title-list">Técnico y Académicos</h2>
                        <ol>
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo 3</Link></li> 
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li>
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li>  
                        </ol>
                    <h2 className="title-list">Vida Práctica y Otros</h2>
                        <ol>
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 
                            <li className="lista-elemento"><Link to=""><i className="down-arrow"></i>Algo</Link></li> 

                        </ol>
                 </ul>
            </div>
        </aside>
    )
}

export default CategoriesList
