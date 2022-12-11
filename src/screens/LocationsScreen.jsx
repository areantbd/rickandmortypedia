import React, { useEffect, useState } from 'react'

import { getLocations } from 'rickmortyapi'

function LocationsScreen() {
    const [locations, setLocations] = useState(null)
    const [actualPage, setPage] = useState(1)
    

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
  return (
    <div className='container pad-bot screen'>
    <h3 className='text-center my-3 text-light'>Rick & Morty Characters</h3>
    <div className='d-flex justify-content-between border px-3 py-2 text-light'>
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
      <li className='text-light my-2 border text-center text-decoration-none'>{location.name}</li>
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