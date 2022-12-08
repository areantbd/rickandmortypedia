import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/images/58f37720a4fa116215a9240f.png"

function Nabvar() {
  return (
    <div>
      <nav className="navbar bg-dark bg-gradient">
        <div className="container justify-content-center">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Rick & Morty" width="200" height="60" />
          </Link>
        </div>
      </nav>
</div>
  )
}

export default Nabvar