import Personajes from "../components/Personajes/Personajes"
import { useState, useEffect } from 'react'

const url = 'https://rickandmortyapi.com/api/character'

const Home = () => {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { results } = data
        //console.log( results )
        setCharacter(results)
      })
  }, [])
  return (
    <Personajes data={character} />
  )
}

export default Home