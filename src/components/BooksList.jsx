import React, { useCallback, useMemo, useRef, useState } from 'react'

import BookItem from './BookItem'
import useCharacters from '../useCharacters'
import Swal from '../../node_modules/sweetalert2/dist/sweetalert2.all'

const BooksList = (props) => {
   
    const [nextPage, setNextPage] = useState(1)
    const API = `https://rickandmortyapi.com/api/character/?page=${nextPage}`
    const [state, setState] = useState([useCharacters])
    const characters = useCharacters(API)
    const [search, setSearch] = useState('')
    const searchInput = useRef(null);
    
    const handleClick = () => {
        if(nextPage < 3){
            setNextPage(nextPage + 1)
            setState({
            ...state,
            })
            return characters
        } else{
            Swal.fire('Ya no hay mas personajes!!')
        }
    }

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
      }, []);

    const filteredUsers = useMemo(() =>
    characters.filter((character) => {
      return character.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
  );

    return (
        <div>
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
                    <button type="button" onClick={handleClick} >Next Page</button>
                    <div className="counter-pages">
                        <p>Pagina 1 de 216</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BooksList
