import React, { useState, useEffect } from 'react'
import './Pokemones.css'

function Pokemon({ id, pokename, image }) {
  return (

    <div className='pokemon-card'>
      <img alt={pokename} src={image} className='pokemon-image' />
      <p className='pokemon-title'>
        <span>#{id}</span>
        <span>{pokename}</span>
      </p>
    </div>
  )

}

const Pokemones = () => {

  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {

    const getPokemones = async () => {
      //recuperamos listado de pokemones
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
     
      // como es una promesa tenemos que poner await en la respuesta y async en la funciom
      const listaPokemones = await response.json();
      const { results } = listaPokemones;

      const pokemones = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        const poke = await response.json();
        console.log(poke);
        return {
          id: poke.id,
          pokename: poke.name,
          image: poke.sprites.other.dream_world.front_default
        }
      })
    
      
      setPokemones(await Promise.all(pokemones))
    }
    getPokemones()

  }, [])


  return (
    <section className='pokemon-container'>
      {
        pokemones.map(pokemon => <Pokemon {...pokemon} />)

        /* 1.map(...) recorre cada elemento del array y ejecutar una función sobre él.
        La función que le paso como argumento se ejecutará una vez por cada elemento del array pokemones.
        El resultado de .map() será un nuevo array con los elementos transformados por la función.

        2. pokemon => <Pokemon {...pokemon} /> es un arrow function que toma un elemento del array pokemones (llamado pokemon). 
        pokemon es el objeto actual en el array en cada iteración.

        3.<Pokemon {...pokemon} /> El operador spread (...) se usa para "expandir" un objeto. 
        En este caso, lo que hace es tomar todas las propiedades del objeto pokemon y pasarlas como props al componente Pokemon.
        esto es equivalente a escribir: <Pokemon id={1} name="loquesea" image="loquesea" /> */

      }
    </section>
  )
}

export default Pokemones