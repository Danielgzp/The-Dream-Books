import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import './styles/BookItem.css'
import useCharacters from '../useCharacters'

const BookItem = () => {
    
    const [nextPage, setNextPage] = useState(1)
    const API = `https://rickandmortyapi.com/api/character/?page=${nextPage}`
    const [state, setState] = useState([useCharacters])
    const characters = useCharacters(API)
    const [search, setSearch] = useState('')
    const searchInput = useRef(null);
    
    const handleClick = () => {
        setNextPage(nextPage + 1)
        setState({
            ...state,
        })

        return characters
    }

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
      }, [])

    const filteredUsers = useMemo(() =>
    characters.filter((character) => {
      return character.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
  )

    return (
        <React.Fragment>
            <div className="books-container">
                <ul className="list-books--ul">

                <h2>Search Character</h2>
                <input type="text" value={search} onChange={handleSearch} ref={searchInput} className="form-control" />
                
                    {filteredUsers.map(characters => (
                        <li key={characters.id}>
                            {/* <img src={characters.image} alt="" />
                            <p>{characters.name}</p> */}
                            <figure className="books-container--portada">
                                <Link href="">
                                    <img src={characters.image} alt="" />
                                </Link>
                                    <figcaption>{characters.name}</figcaption>
                            </figure>
                            <div className="autor">
                                    <Link href="">{characters.type} </Link>
                            </div>
                            <div className="descargar">
                                    <Link href="">{characters.species} {characters.origin.name}</Link>
                            </div>
                        </li>
                    ))} 
                    <button type="button" onClick={handleClick} >Next Page</button>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default BookItem
