import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getLocations } from 'rickmortyapi'

function LocationsScreen() {
    let actPage = Number(localStorage.getItem("locPage"))
    const [locations, setLocations] = useState(null)
    const [actualPage, setPage] = useState(actPage)
    localStorage.setItem("locPage", actualPage)
    

    useEffect(() => {
        getLocations({
          page: actualPage,
          status: ""
        })
            .then((data) => setLocations(data))
            .catch((error) => console.error(error));
    }, [actualPage])

    if (actualPage < 1) {
      setPage(1)
    }

    if (actualPage > locations?.data?.info?.pages) {
        setPage(locations?.data?.info?.pages)
      }
    
    console.log(actualPage)
    function handleUp() {      
      setPage(actualPage + 1)
    }
    function handleDown() {      
      setPage(actualPage - 1)
    }
    console.log(locations?.data.results)
  return (
    <div className='container pad-bot screen'>
    <h3 className="text-center my-3 text-light font-face">Locations</h3>
    <div className='d-flex justify-content-between border px-3 py-2 text-light font-face'>
      <h6>Total Locations: {locations?.data?.info?.count}</h6>
      <h6>Total pages: {locations?.data?.info?.pages}</h6>
    </div>
    <div className='d-flex justify-content-center gap-5 my-3'>
      {actualPage > 1 && <button onClick={handleDown} className="btn btn-sm btn-secondary bg-gradient">Page down</button>}
      <h3 className='text-light'>{actualPage}</h3>
      {actualPage < locations?.data?.info?.pages && <button onClick={handleUp} className="btn btn-sm btn-secondary bg-gradient">Page up</button>}
    </div>
    <ul className='locations-list ps-0'>
    {locations?.data?.results?.map((location) => (
      <Link to={`/locations/${location.id}`} className="text-decoration-none"><li className='my-2 text-center border d-flex justify-content-between' key={location.id}><b className='text-secondary'>Location name: {location.name}</b> <b className='text-danger'>Residents: {location.residents.length}</b></li></Link>
    ))}
    </ul>
    <div className='d-flex justify-content-center gap-5 my-5'>
      {actualPage > 1 && <button onClick={handleDown} className="btn btn-sm btn-secondary bg-gradient">Page down</button>}
      <h3 className='text-light'>{actualPage}</h3>
      {actualPage < locations?.data?.info?.pages && <button onClick={handleUp} className="btn btn-sm btn-secondary bg-gradient">Page up</button>}
    </div>
    
    </div>
  )
}

export default LocationsScreen