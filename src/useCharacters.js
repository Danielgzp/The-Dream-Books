
export default function UseCharacters ({ nextPage }) {
    const API = `https://rickandmortyapi.com/api/character/?page=${nextPage}`
 
    return fetch(API)
      .then(res => res.json())
      .then(data => data.results)
}


