import { useEffect, useState } from "react";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

function UseBooks(endpoint, options = {}){
  
    const API = `http://localhost:3001/books`
    
    options.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const [books, setBooks] = useState([]);
    
    useEffect(() => {
      async function callApi(){
        try{
          await simulateNetworkLatency
          const response = await fetch(API, options)
          const data =  await response.json()
          setBooks(data)
    
        } catch(error){
          console.error(error);
        }
      }
      callApi()
    }, [API])

  return books
}

const api = {
  books: {
    list() {
      return UseBooks('/');
    },
    create(book) {
      return UseBooks(`/libros/new`, {
        method: 'POST',
        body: JSON.stringify(book),
      });
    },
    read(bookId) {
      return UseBooks(`/libros/${bookId}/`);
    },
    update(bookId, updates) {
      return UseBooks(`/libros/${bookId}/`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(bookId) {
      return UseBooks(`/libros/${bookId}/`, {
        method: 'DELETE',
      });
    },
  },
};

export default api


  



