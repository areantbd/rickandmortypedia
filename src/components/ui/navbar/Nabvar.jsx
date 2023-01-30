import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/images/58f37720a4fa116215a9240f.png"

function Nabvar() {

  function setBackToChars() {
    localStorage.setItem("back", "characters")
  }
  function setBackToLocs() {
    localStorage.setItem("back", "locations")
  }

  return (
    <div>
      <nav className="navbar bg-dark bg-gradient">
        <div className="container justify-content-between">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Rick & Morty" width="200" height="60" />
          </Link>
          <div className='justify-content-end'>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-light bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title font-face" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" className="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" data-bs-dismiss="offcanvas" aria-label="Close">
                  <li className="nav-item">
                    <Link className="nav-link font-face text-decoration-underline text-danger" aria-current="page" to="/characters" onClick={setBackToChars}>Characters</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link font-face text-decoration-underline text-danger" aria-current="page"  to="/locations" onClick={setBackToLocs}>Locations</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link disabled" aria-current="page"  href="#">Episodes</Link>
                  </li> */}
                </ul>
              </div>
              <div className='d-flex flex-column gap-2 mb-3 ms-3'>
                  <a href='https://github.com/areantbd' target="_blank" rel="noreferrer" className='text-secondary fa fa-github'> Personal Github</a>
                  <a href='https://github.com/areantbd/rickandmortypedia' target="_blank" rel="noreferrer" className='text-secondary fa fa-github'> Project Github</a>
                  <a href='https://ivanrf.netlify.app/' target="_blank" rel="noreferrer" className='text-secondary fa fa-user'> Personal Portfolio</a>
              </div>
            </div>            
          </div>
        </div>        
      </nav>
</div>
  )
}

export default Nabvar