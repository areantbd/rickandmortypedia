import React, { useEffect, useState } from 'react'
import { getCharacters } from 'rickmortyapi'
import CharacterCard from '../components/CharacterCard';

function CharactersScreen() {
    const [chars, setChars] = useState(null)

    useEffect(() => {
        getCharacters()
            .then((data) => setChars(data))
            .catch((error) => console.error(error));
    }, [])
    console.log(chars)
  return (
    <div>
    <h1>Rick & Morty Characters</h1>
    <h3>Total characters: {chars?.data?.info?.count}</h3>
    <h3 className='mb-5'>Total pages: {chars?.data?.info?.pages}</h3>
    {chars?.data?.results?.map((char) => (
      <CharacterCard {...char} key={char.id}/>
    ))}
    
    </div>
  )
}

export default CharactersScreen