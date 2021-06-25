
export default function UseListCharacters ({ numberPage }) {
    const API = `https://rickandmortyapi.com/api/character/?page=${numberPage}`
 
    return fetch(API)
      .then(res => res.json())
      .then(data => data.results)
}




