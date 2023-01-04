import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getCharacter } from 'rickmortyapi'
import loading from "../../assets/images/giphy.gif";

function CharactersDetailScreen() {
    let { characterId } = useParams()
		const [char, setChar] = useState(null)
		const LOCATION_NUM = /[0-9]/

    useEffect(() => {
        getCharacter(Number(characterId))
					.then((data) => setChar(data))
					.catch((error) => console.error(error))
    }, [characterId])
		console.log(char?.data)

		if (char?.data?.status === "unknown") {
			char.data.status = "Unknown"
		}
		if (char?.data?.gender === "unknown") {
			char.data.gender = "Unknown"
		}
		if (char?.data.origin.name === "unknown") {
			char.data.origin.name = "Unknown"
		}
		if (char?.data.location.name === "unknown") {
			char.data.location.name = "Unknown"
		}
		const locationNumIndex = char?.data.origin.url.search(LOCATION_NUM)
		const locationNum = char?.data.origin.url.slice(locationNumIndex)
		console.log(locationNum)

  return char ? (
    <div className='container'>
      <Link to="/characters"><button className='btn btn-info btn-sm font-face my-3'>Go back</button></Link>
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<div className=''>					
					<img src={`${char?.data.image}`} alt={char?.data.name} className="rounded"></img>
				</div>
				<div>
					<p className='text-secondary mt-2'><b>Name: </b><b className='text-danger'>{char?.data.name}</b></p>
					{char?.data?.status === "Alive" && <p className='text-secondary mt-2'><b>Status: </b><b className='text-danger'>{char?.data?.status} </b>🟢</p>}
					{char?.data?.status === "Dead" && <p className='text-secondary mt-2'><b>Status: </b><b className='text-danger'>{char?.data?.status} </b>🔴</p>}
					{char?.data?.status === "Unknown" && <p className='text-secondary mt-2'><b>Status: </b><b className='text-danger'>{char?.data?.status} </b>⚪</p>}
					<p className='text-secondary mt-2'><b>Specie: </b><b className='text-danger'>{char?.data.species}</b></p>
					{char?.data?.type && <p className='text-secondary mt-2'><b>Type: </b><b className='text-danger'>{char?.data.type}</b></p>}
					<p className='text-secondary mt-2'><b>Gender: </b><b className='text-danger'>{char?.data.gender}</b></p>
					{char?.data.origin.name !== "Unknown" ? (
						<Link to={`/locations/${locationNum}`} className="text-decoration-none"><p className='text-secondary mt-2'><b>Origin: </b><b className='text-danger'>{char?.data.origin.name}</b></p></Link>
						) : (<p className='text-secondary mt-2'><b>Origin: </b><b className='text-danger'>{char?.data.origin.name}</b></p>)}
					<Link to={`/locations/${locationNum}`} className="text-decoration-none"><p className='text-secondary mt-2'><b>Actual location: </b><b className='text-danger'>{char?.data.location.name}</b></p></Link>
				</div>
			</div>
    </div>
  ) : (
		<>
			<Link to="/characters"><button className='btn btn-info btn-sm font-face mt-5 ms-3'>Go back</button></Link>
			<div className='d-flex justify-content-center mt-5 pt-5'>
				<img src={loading} alt="loading"></img>
			</div>
		</>
	)
}

export default CharactersDetailScreen