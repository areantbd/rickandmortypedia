import React, { useEffect, useState } from 'react'
import { getCharacters } from 'rickmortyapi'
import CharacterCard from '../components/CharacterCard';

function CharactersScreen() {
    const [chars, setChars] = useState(null)
    const [actualPage, setPage] = useState(1)
    

    useEffect(() => {
        getCharacters({
          page: actualPage,
          status: ""
        })
            .then((data) => setChars(data))
            .catch((error) => console.error(error));
    }, [actualPage])

    if (actualPage < 1) {
      setPage(1)
    }
    
    console.log(actualPage)
    function handleUp() {      
      setPage(actualPage + 1)
    }
    function handleDown() {      
      setPage(actualPage - 1)
    }
  return (
    <div className='container pad-bot'>
    <h1 className='text-center my-5 text-light'>Rick & Morty Characters</h1>
    <div className='d-flex justify-content-between border px-3 py-2 text-light'>
      <h3>Total characters: {chars?.data?.info?.count}</h3>
      <h3>Total pages: {chars?.data?.info?.pages}</h3>
    </div>
    <div className='d-flex justify-content-center gap-5 my-5'>
      {actualPage > 1 && <button onClick={handleDown} className="btn btn-sm btn-secondary">Page down</button>}
      <h3 className='text-light'>{actualPage}</h3>
      <button onClick={handleUp} className="btn btn-sm btn-secondary">Page up</button>
    </div>
    {chars?.data?.results?.map((char) => (
      <CharacterCard {...char} key={char.id}/>
    ))}
    <div className='d-flex justify-content-center gap-5 my-5'>
      {actualPage > 1 && <button onClick={handleDown} className="btn btn-sm btn-secondary">Page down</button>}
      <h3 className='text-light'>{actualPage}</h3>
      <button onClick={handleUp} className="btn btn-sm btn-secondary">Page up</button>
    </div>
    
    </div>
  )
}

export default CharactersScreen