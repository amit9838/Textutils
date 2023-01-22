import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`} style={{borderBottom:'2px solid grey'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <div className="right-ele d-flex  align--tems-center" >
            <div className="form-check form-switch mx-3 my-auto">
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleTheme} id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${props.theme === 'light'? 'dark':'light'} heading-1`} htmlFor="flexSwitchCheckDefault">Dark</label>
            </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
                    about: PropTypes.string}

Navbar.defaultProps = {title : 'Title',
                    about: 'About'}