export default function UseCharacter ({ numberCharacter, characterName }) {

    const API_CHARACTER = `https://rickandmortyapi.com/api/character/${numberCharacter}`
   
      return fetch(API_CHARACTER)
        .then(res => res.json())
        .then(data => data)
  }