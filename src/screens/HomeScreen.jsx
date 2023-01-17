import React from 'react'
import { Link } from 'react-router-dom'
import image from "../assets/images/pedia.png"

function HomeScreen() {

  function setBackToChars() {
    localStorage.setItem("back", "characters")
  }
  function setBackToLocs() {
    localStorage.setItem("back", "locations")
  }

  return (
    <>
    <div className='home-page container mt-3 d-flex justify-content-evenly'>
        <Link to="/characters"><button className='btn menu-btn btn-sm font-face' onClick={setBackToChars}>Characters</button></Link>
        <Link to="/locations"><button className='btn menu-btn btn-sm font-face' onClick={setBackToLocs}>Locations</button></Link>
        {/* <Link to="/episodes"><button className='btn menu-btn btn-sm font-face'>Episodes</button></Link> */}
    </div>
    <div className='homepg mt-4'>
      <img src={image} alt="home" className='homebg rounded' filter/>
    </div>
    </>
  )
}

export default HomeScreen