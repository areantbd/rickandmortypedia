import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCharacter, getLocation } from 'rickmortyapi'
import loading from "../../assets/images/giphy.gif";
import CharacterCard from '../../components/characters-card/CharacterCard';

function LocationDetailScreen() {
  let { locationNum } = useParams()
  const [location, setLocation] = useState(null)
  const [chars, setChars] = useState(null)
  const LOCATION_NUM = /[0-9]/
  const charsIndex = location?.data?.residents[0]?.search(LOCATION_NUM)
  const charsNums = location?.data.residents.map((res) => (
    Number(res.slice(charsIndex))
    ))


  

  useEffect(() => {
    // addChars()
    getLocation(+locationNum)
      .then((data) => setLocation(data))
      .catch((error) => console.error(error))

  }, [locationNum])

  // const addChars = useCallback(() => {
  //   getCharacter(charsNums)
  //     .then((data) => setChars(data))
  //     .catch((error) => console.error(error))
  // }, [charsNums])

  function showChars() {
    getCharacter(charsNums)
      .then((data) => setChars(data))
      .catch((error) => console.error(error))
  }
  

  // let test = location?.data.residents.forEach((el)=> console.log(el))

  // console.log(chars)
  console.log(chars?.data.length)

  return location ? (
    <div className='text-light container mt-3'>
      <h1>Name: {location?.data.name}</h1>
      <h1>Dimension: {location?.data.name}</h1>
      <h1>Type: {location?.data.type}</h1>
      {!chars ? (
        <div className='d-flex flex-row-reverse'>
          <button onClick={showChars} className="btn menu-btn mt-4">Show characters</button>
        </div>
      ) : (<></>)}
      {chars?.data.length !== 0 ? (
        <div className='row mt-4'>
        {chars?.data.map((char) => (
          <CharacterCard {...char} key={char.id} />
          ))}
      </div>
      ) : (
        <h1 className='mt-5 pt-5 text-warning'>Nothing to see here</h1>
      )}
      

    </div>
  ) : (
    <div className='container'>
			<div className='d-flex justify-content-center mt-5 pt-5'>
				<img src={loading} alt="loading"></img>
			</div>
		</div>
  )
}

export default LocationDetailScreen