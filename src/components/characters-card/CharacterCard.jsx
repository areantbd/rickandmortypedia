import React from 'react'
import { Link } from 'react-router-dom'

function CharacterCard({name, status, species, gender, image, type, id}) {

  if (species === "Mythological Creature") {
    species = "mythologic"
  }

  return (
    <div className='container col-12 col-md-6'>
        <Link to={`/character/${id}`} className=" text-decoration-none text-dark">
          <div className="card mb-3 border-0 chars-card-body ">
            <div className="row g-0">
              <div className="col-6">
                <img src={`${image}`} className="img-fluid rounded-start" alt={name} />
              </div>
              <div className="col-6 my-auto">
                {status === "Alive" && <div className='status  '><b> {species.toLowerCase( )} - {status.toLowerCase()}</b>🟢</div>}
                {status === "Dead" && <div className='status'><b>{species.toLowerCase( )} - {status.toLowerCase()}</b>🔴</div>}
                {status === "unknown" && <div className='status '><b> {species.toLowerCase( )} - {status.toLowerCase()}</b>⚫</div>}
                <div className="card-body ms-2 ">
                  <h5 className="card-title mb-3"><b>{name}</b></h5>
                  <h6 className="card-text">{gender}</h6>
                </div>
              </div>
            </div>
          </div>
        </Link>
    </div>
  )
}

export default CharacterCard