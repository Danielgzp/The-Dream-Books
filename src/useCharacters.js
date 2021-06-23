
function useCharacters({nextPage}) {
  const API = `https://rickandmortyapi.com/api/character/?page=${nextPage}`

  return fetch(API)
        .then(response => response.json())
        .then(data => data.results);
}

export default useCharacters;
