import React, { useState, useEffect } from 'react' // Sovellus ottaa "react" nimisen kirjaston käyttöönsä, joka myös hyödyntää "useState" ja "useEffect" funktioita.

const App = () => { // Sovellus alkaa tästä...

  return (
    <div className="app-container">
      <nav className="navbar navbar-expand-lg navbar-light custom-nav-color">
          <a className="navbar-brand" href="#">Santun Uimakoulu</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item text-center active">
                <a className="nav-link rwz" href="#">Etusivu <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item text-center">
                <a className="nav-link" href="#">Hinnasto</a>
              </li>
              <li className="nav-item text-center">
                <a className="nav-link" href="#">Ota yhteyttä</a>
              </li>
            </ul>
          </div>
      </nav>

      <div className="app-content content-style container">

        <div>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim suspendisse in est ante in nibh. Lobortis feugiat vivamus at augue eget arcu dictum. Aliquam ut porttitor leo a diam sollicitudin tempor id. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Massa tincidunt nunc pulvinar sapien et. Ac turpis egestas integer eget aliquet. Nec ultrices dui sapien eget mi proin sed libero. Rutrum quisque non tellus orci ac auctor augue mauris. Commodo nulla facilisi nullam vehicula ipsum. Congue quisque egestas diam in arcu. Et malesuada fames ac turpis. Id cursus metus aliquam eleifend mi in. Non blandit massa enim nec dui nunc mattis enim ut. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Arcu ac tortor dignissim convallis aenean et tortor at. Nunc non blandit massa enim nec dui nunc. Eget mi proin sed libero enim. Morbi tincidunt augue interdum velit euismod.</p>
        </div>

      </div>

        <footer className="container-fluid custom-footer">
          <div className="contact-me">
            <p>Contact me at</p>
          </div>

          <div className="d-flex justify-content-center ">
            <div className="social-buttons-border">
              <a href="https://www.instagram.com/aarnipavlidi/" target="_blank"><i className="fab fa-instagram social-buttons"></i></a>
            </div>
            <div className="social-buttons-border">
              <a href="https://www.facebook.com/aarni.pavlidi/" target="_blank"><i className="fab fa-facebook-f social-buttons"></i></a>
            </div>
          </div>

          <div className="copyright">
           <p>Copyright &copy 2021 | Aarni Pavlidi</p>
          </div>
        </footer>
      </div>
  )
} // Sovellus loppuu tähän...

export default App
