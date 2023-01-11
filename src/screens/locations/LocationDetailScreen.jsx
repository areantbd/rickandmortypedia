import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCharacter, getLocation } from 'rickmortyapi'
import loading from "../../assets/images/giphy.gif";
import CharacterCard from '../../components/characters-card/CharacterCard';
import gif from "../../assets/images/nothing to see.gif"
import { Link } from 'react-router-dom';

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
    getLocation(+locationNum)
      .then((data) => setLocation(data))
      .catch((error) => console.error(error))

  }, [locationNum])

  function showChars() {
    if (location?.data.residents.length === 0) {
      setChars([])
    } else if (location?.data.residents.length === 1) {
      getCharacter(charsNums)
      .then((data) => setChars([data?.data]))
      .catch((error) => console.error(error))
    } else{
    getCharacter(charsNums)
      .then((data) => setChars(data?.data))
      .catch((error) => console.error(error))
    }
  }

  return location ? (
    <div className='text-light container mt-3'>
      <Link to="/locations"><button className='btn btn-info btn-sm font-face my-3'>Go back</button></Link>
      <p className='text-secondary'><b className='text-secondary mt-2'>Name: </b><b className='text-danger'>{location?.data.name}</b></p>
      <p className='text-secondary'><b className='text-secondary mt-2'>Dimension: </b><b className='text-danger'>{location?.data.dimension}</b></p>
      <p className='text-secondary'><b className='text-secondary mt-2'>Type: </b><b className='text-danger'>{location?.data.type}</b></p>
      {!chars ? (
        <div className='d-flex flex-row-reverse'>
          <button onClick={showChars} className="btn menu-btn mt-4">Show characters</button>
        </div>
      ) : (<></>)}
      {chars?.length !== 0 ? (
        <div className='row mt-4'>
        {chars?.map((char) => (
          <CharacterCard {...char} key={char.id} />
          ))}
      </div>
      ) : (
        <div className='container'>
          <div className='d-flex justify-content-center mt-5 pt-5 row'>
            <img src={gif} alt="nothing to see" className='rounded col-12 col-lg-6'></img>
          </div>
        </div>
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