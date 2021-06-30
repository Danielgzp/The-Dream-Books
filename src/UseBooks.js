import { useEffect, useState } from "react";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

export default function UseBooks({endpoint}){
  
    const API = `http://localhost:3001/${endpoint}`
    const [books, setBooks] = useState({
      'initial_categories': {
          'literatura_ficcion':[
            {
              'aventura': [],
            },
            {
              'biografias_memorias': [],
            },
            {
              'ciencia_ficcion': [],
            },
            {
              'ensayos': [],
            },
            {
              'fantasia': [],
            },
            {
              'humor': [],
            },
            {
              'infantil': [],
            },
            {
              'terror_suspenso': []
            }
          ],
          'vida_practica': [
            {
              'autoayuda': [],
            },
            {
              'viajes_guias': [],
            },
            {
              'espiritualidad': [],
            }
          ],
          'tecnico_academicos': [
            {
              'ciencias_exactas': [],
            },
            {
              'ciencias_naturales': [],
            },
            {
              'ciencias_sociales': [],
            }
          ]
      },
      'initial_books': [],
      'initial_autors': [
        {
          'published_books': []
        }
      ]
    });
    
    useEffect(() => {
      async function callApi(){
        try{
          await simulateNetworkLatency
          const response = await fetch(API)
          const data =  await response.json()
          setBooks(data)
    
        } catch(error){
          console.error(error);
        }
      }
      callApi()
    }, [])

  return books
}
  
  



