import React, { useEffect, useState } from 'react'
import { Link } from 'wouter'

import Character from '../components/Character'
import UseCharacter from '../UseCharacter'
import BookItem from '../components/BookItem'
import UseListCharacters from '../UseListCharacters'
import CategoriesList from '../components/CategoriesList'

const Books = ({ params }) => {

    console.log(params)
    const { numberCharacter } = params
    console.log(numberCharacter)
    const [character, setCharacter] = useState([])
    const [characterList, setCharacterList] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        UseCharacter({ numberCharacter }).then(character => setCharacter(character), setLoading(false))
        UseListCharacters({ numberPage: 2 }).then(characterList => setCharacterList(characterList), setLoading(false))
    }, [numberCharacter])
    

    /*hice algunso cambios aqui para proabr ciertas cosas*/
    
    return (
        <React.Fragment>
        <main>   
            <CategoriesList />
            <section>
                <div>
                    <h2>{character.name}</h2>
                    <Link to="#"><strong>{character.species}</strong></Link>
                    <figure>
                        <img src={character.image} alt="Portada del Libro" />
                    </figure>
                </div>
                <div>
                    <Link to="#">DESCARGAR PDF</Link>
                    <Link to="#">LEER ONLINE</Link>
                </div>
                <div>
                    <h2>Descripcion</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus recusandae dolorum sit nemo consectetur, iusto omnis laudantium iure, maxime ipsum totam officiis quidem obcaecati fugiat ducimus molestiae? Fuga, atque minus!
                    Soluta quis, nihil vel quibusdam magnam quod quam, labore ipsum, repellendus aspernatur architecto harum. Asperiores reiciendis suscipit corrupti minima vitae a mollitia, maxime eveniet sint? Ipsa provident asperiores placeat accusantium!
                    Illum minus facilis quam praesentium velit tenetur consequuntur deserunt autem et sit. Quaerat, cupiditate quisquam? Consectetur aspernatur soluta hic, nam obcaecati, non libero maxime amet ipsam repellendus dicta, dolorem provident?
                    Ut id similique distinctio cupiditate laudantium ducimus magni tempore, numquam illum rem, accusantium beatae tenetur excepturi eum officia odit corporis voluptatibus deserunt dignissimos accusamus. Atque, maxime id? Deserunt, eveniet asperiores.
                    Consequatur commodi eius totam dignissimos suscipit omnis porro voluptatum minima, aspernatur nulla ipsum temporibus illum eos iste deleniti, numquam possimus aliquam doloremque atque. Repellat alias molestiae neque sit voluptas recusandae!</p>
                </div>
                <div>
                    <h2>LIBROS DEL MISMO AUTOR</h2>
                    <ul>
                        {characterList.map(characterlist => (
                            <li>
                                <BookItem character={characterlist} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
        </React.Fragment>
    )
}

export default Books
