import React from 'react'

function CharacterCard({name, status, species, gender, image, type, id}) {
  return (
    <div className='container'>
        {/* <h2>{name}</h2>
        <div className='d-flex flex-row gap-4'>
          <img src={`${image}`} alt={name}/>
          <div>
            <h3>Status: {status}</h3>
            <h3>Specie: {species}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Type: {type}</h3>
          </div>
        </div>
        <hr/> */}

        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-6">
              <img src={`${image}`} className="img-fluid rounded-start" alt={name} />
            </div>
            <div className="col-6 my-auto">
              <div className="card-body">
                <h4 className="card-title mb-5">{name}</h4>
                <h5 className="card-text">Specie: {species}</h5>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CharacterCard