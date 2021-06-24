import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import BookItem from './BookItem'
import UseCharacters from '../useCharacters'
import Swal, { swal } from '../../node_modules/sweetalert2/dist/sweetalert2.all'

import { Link, Route } from 'wouter'

export default function BooksList({ params = 1 }) {
    
    console.log(params)
    const { nextPage } = params
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        UseCharacters({ nextPage }).then(characters => setCharacters(characters), setLoading(false))
    }, [nextPage])
    

    const [search, setSearch] = useState('')
    const searchInput = useRef(null);
    
    /*const handleClickNext = () => {
        if(nextPage < 5){
            nextPage = nextPage + 1
        } else{
            Swal.fire('Ya no hay mas personajes!!')
        }
    }
    const handleClickPrev = () => {
        if(nextPage > 1){
            nextPage = nextPage - 1
        } 
    }*/

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
      }, []);

    const filteredUsers = useMemo(() =>
    characters.filter((character) => {
      return character.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
  );

    if(loading){
        return <h1>Cargando</h1>
    }

    return (
        <div>
           {loading && (
               <h1>Cargandooooo</h1>
           )}
            <div className="books-container">
                <h2>Search Character</h2>
                <input type="text" value={search} onChange={handleSearch} ref={searchInput} className="form-control" />
                <ul className="list-books--ul">
                
                    {filteredUsers.map(character => (
                            <li key={character.id}>
                                <BookItem character={character} />
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
                    <button type="button" /*onClick={handleClickPrev}*/ >Prev Page</button>
                    <button type="button" /*onClick={handleClickNext}*/ >Next Page</button>
                    <div className="counter-pages">
                        <p>Pagina 1 de 216</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

