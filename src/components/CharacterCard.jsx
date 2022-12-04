import React from 'react'

function CharacterCard({name, status, species, gender, image, type}) {
  return (
    <div className='container'>
        <h2>{name}</h2>
        <div className='d-flex flex-row gap-4'>
          <img src={`${image}`} alt={name}/>
          <div>
            <h3>Status: {status}</h3>
            <h3>Specie: {species}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Type: {type}</h3>
          </div>
        </div>
        <hr/>
    </div>
  )
}

export default CharacterCard