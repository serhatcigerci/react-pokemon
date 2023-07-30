import React from 'react'

export default function PokemonList({ pokemon, PageUrl}) {
  return (
    <div>
        {pokemon.map(p => (
            <div key={p}> {p} </div>
        ))}
        {PageUrl.map(p => (
            <div key={p}> {p} </div>
        ))}
    </div>
  )
}
