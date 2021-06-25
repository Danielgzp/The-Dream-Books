import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import BookItem from './BookItem'
import UseListCharacters from '../UseListCharacters'
import Swal from '../../node_modules/sweetalert2/dist/sweetalert2.all'

import { Link, useLocation } from 'wouter'

export default function BooksList() {
    
    const [numberPage, setnumberPage] = useState(1) 
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        UseListCharacters({ numberPage }).then(characters => setCharacters(characters), setLoading(false))
    }, [numberPage])
    

    const handleClickNext = () => {
        if(numberPage < 5){
            setnumberPage(numberPage + 1)
        } else{
            Swal.fire('Ya no hay mas personajes!!')
        }
    }
    const handleClickPrev = () => {
        if(numberPage > 1){
            setnumberPage(numberPage - 1)
        } 
    }

    const [numberCharacter, setNumberCharacter] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = event => {
        event.preventDefault()
        pushLocation(`/search/${numberCharacter}`)
    }
    
    const handleChange = event => {
        setNumberCharacter(event.target.value)
    }

    return (
        <div>
            {loading && (
                <h1>Cargandooooo</h1>
            )}
            <div className="books-container">
                <h2>Search Character</h2>
                <form onSubmit={handleSubmit} >
                    <input 
                        type="text" 
                        value={numberCharacter} 
                        onChange={handleChange}  
                        placeholder="Search Character..." 
                        />
                </form>
                <ul className="list-books--ul">
                
                    {characters.map(character => (
                            <li key={character.id}>
                                <BookItem character={character} />
                                <Link to={`/libro/${character.id}`} >aaa</Link>
                            </li>
                    ))} 
                </ul>
                <div className="pagination">
                        {/* <div className="number-pages">
                            <ul>
                                <li>
                                    <a href="">1</a>
                                    <a href="">2</a>
                                    <a href="">3</a>
                                    <a href="">4</a>
                                    <a href="">5</a>
                                    <a href="">6</a>
                                    <a href="">></a>
                                    <a href="">ÚLTIMO</a>
                                </li>
                            </ul>
                        </div> */}
                    <button type="button" onClick={handleClickPrev} >Prev Page</button>
                    <button type="button" onClick={handleClickNext} >Next Page</button>
                    <div className="counter-pages">
                        <p>Pagina 1 de 216</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

