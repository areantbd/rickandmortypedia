import React from 'react'
import { Link } from 'react-router-dom'

function HomeScreen() {
  return (
    <div className='home-page container mt-5 '>
        <Link to="/characters"><button>Characters</button></Link>
        <Link to="/locations"><button>Locations</button></Link>
        <Link to="/episodes"><button>Episodes</button></Link>
    </div>
  )
}

export default HomeScreen