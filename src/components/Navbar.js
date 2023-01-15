import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <div className="right-ele d-flex  align--tems-center" >
            <div class="form-check form-switch mx-3 my-auto">
              <input class="form-check-input" type="checkbox" role="switch" onClick={props.toggleTheme} id="flexSwitchCheckDefault"/>
              <label class={`form-check-label text-${props.theme === 'light'? 'dark':'light'} heading-1`} htmlFor="flexSwitchCheckDefault">Dark</label>
            </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
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