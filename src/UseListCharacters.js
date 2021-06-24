
export default function UseListCharacters ({ nextPage }) {
    const API = `https://rickandmortyapi.com/api/character/?page=${nextPage}`
 
    return fetch(API)
      .then(res => res.json())
      .then(data => data.results)
}




