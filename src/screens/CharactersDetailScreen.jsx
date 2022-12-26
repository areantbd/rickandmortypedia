import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getCharacter } from 'rickmortyapi'
import loading from "../assets/images/giphy.gif";

function CharactersDetailScreen() {
    let { characterId } = useParams()
		const [char, setChar] = useState(null)

    useEffect(() => {
        getCharacter(Number(characterId))
					.then((data) => setChar(data))
					.catch((error) => console.error(error))
    }, [characterId])
		console.log(char?.data)
  return char ? (
    <div className='container'>
      <Link to="/characters"><button className='btn btn-info btn-sm font-face my-3'>Go back</button></Link>
			<div className='d-flex flex-column'>
				<div className='d-flex flex-column relative'>					
					<img src={`${char?.data.image}`} alt={char?.data.name} className="rounded"></img>
				</div>
				<h3 className='text-secondary mt-2'>Name: {char?.data.name}</h3>
				{char?.data?.status === "Alive" && <h3 className='text-secondary mt-2'>Status: {char?.data?.status} 🟢</h3>}
				{char?.data?.status === "Dead" && <h3 className='text-secondary mt-2'>Status: {char?.data?.status} 🔴</h3>}
				{char?.data?.status === "unknown" && <h3 className='text-secondary mt-2'>Status: {char?.data?.status} ⚪</h3>}
				<h3 className='text-secondary mt-2'>Specie: {char?.data.species}</h3>
				<h3 className='text-secondary mt-2'>Type: {char?.data.type}</h3>
				<h3 className='text-secondary mt-2'>Gender: {char?.data.gender}</h3>
				<h3 className='text-secondary mt-2'>Origin: {char?.data.origin.name}</h3>
				<h3 className='text-secondary mt-2'>Actual location: {char?.data.location.name}</h3>
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