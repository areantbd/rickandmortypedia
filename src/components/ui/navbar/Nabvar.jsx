import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/images/58f37720a4fa116215a9240f.png"

function Nabvar() {
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
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" className="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" data-bs-dismiss="offcanvas" aria-label="Close">
                  <li className="nav-item">
                    <Link className="nav-link text-light" aria-current="page" to="/characters">Characters</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" aria-current="page"  to="/locations">Locations</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link disabled" aria-current="page"  href="#">Episodes</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>        
      </nav>
</div>
  )
}

export default Nabvar