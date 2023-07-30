import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import axios from 'axios'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])

  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [PageUrl, setPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get(currentPageUrl).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
      setPageUrl(res.data.results.map(p => p.url))
    })

    return
   
  }, [currentPageUrl])

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }
  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }
  if (loading) return "Loading..."

  return (
    <>
      <PokemonList pokemon={pokemon} PageUrl = {PageUrl} />
      <Pagination 
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </>
  )
}

export default App;
