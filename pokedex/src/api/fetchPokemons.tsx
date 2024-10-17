import React from 'react'

const fetchPokemons = async () => {
    const response = await fetch (
        'https://unpkg.com/browse/pokemon@0.7.0/pokemon.json'
    )
    if(!response.ok){
        throw new Error('Failed to fetch Pokemon')
    }
    const results = await response.json()
    
    const pokemons = results.map ((pokemon:any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: 'https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif'
    }))
        
    const uniquePokemons = pokemons.filter(
        (pokemon: any, index: number) =>
            pokemon.findIndex((other:any) => other.id === pokemon.id) === index
    )
    
}

export default fetchPokemons
// 
