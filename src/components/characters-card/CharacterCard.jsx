import React from 'react'
import { Link } from 'react-router-dom'

function CharacterCard({name, status, species, gender, image, type, id}) {
  return (
    <div className='container col-12 col-md-5'>
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

        <Link to={`/character/${id}`} className=" text-decoration-none text-dark">
        <div className="card mb-3 border-0 chars-card-body ">
              {gender === "Male" && status === "Alive" &&  species !== "Animal" && <div className='status'>👨</div>}
              {gender === "Female" && status === "Alive" &&  species !== "Animal" && <div className='status'>👩</div>}
              {status === "Dead" && <div className='status'>💀</div>}
              {gender === "Male" && status === "unknown" &&  species !== "Animal" && <div className='status'>🤷‍♂️</div>}
              {gender === "Female" && status === "unknown" &&  species !== "Animal" && <div className='status'>🤷‍♀️</div>}
              {gender === "unknown" &&  status !== "Dead" && <div className='status'>👽</div>}
              {gender === "Genderless" &&  status !== "Dead" && <div className='status'>👽</div>}
			        {species === "Animal" && status !== "Dead" && <div className='status'>🐶</div>}
          <div className="row g-0">
            <div className="col-6">
              <img src={`${image}`} className="img-fluid rounded-start" alt={name} />
            </div>
            <div className="col-6 my-auto">
              <div className="card-body ms-2 ">
                <h5 className="card-title mb-3"><b>{name}</b></h5>
                <h6 className="card-text">{species}</h6>
              </div>
            </div>
          </div>
        </div>
        </Link>
    </div>
  )
}

export default CharacterCard