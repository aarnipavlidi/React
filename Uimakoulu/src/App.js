import React, { useState } from 'react' // Sovellus ottaa "react" nimisen kirjaston käyttöönsä, joka myös hyödyntää "useState" ja "useEffect" funktioita.
import GetContent from './components/Content'

const App = () => { // Sovellus alkaa tästä...

  const [content, setContent] = useState('')

  return (
    <div className="app-container">
      <nav className="navbar navbar-expand-lg navbar-light custom-nav-color">
          <a className="navbar-brand" href="#">Santun Uimakoulu</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item text-center active">
                <a onClick={() => setContent('Etusivu')} className="nav-link rwz" href="#">Etusivu <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item text-center">
                <a onClick={() => setContent('Hinnasto')} className="nav-link" href="#">Hinnasto</a>
              </li>
              <li className="nav-item text-center">
                <a onClick={() => setContent('Ota yhteyttä')} className="nav-link" href="#">Ota yhteyttä</a>
              </li>
            </ul>
          </div>
      </nav>

      <GetContent checkContent={content} />

        <footer className="container-fluid">
          <div className="footer-title">
            <h3>Uimakoulu Oy</h3>
          </div>

          <div className="footer-info">
            <p>Uinninopetus:</p>
            <p>Perjantaisin 16:00 - 18:00</p>
            <p>info@learntoswim.com</p>
            <p>puh. 010 123 123</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-auto social-text">
              <a href="#" target="_blank">INSTAGRAM</a>
            </div>
            <div className="col-sm-auto social-text">
              <a href="#" target="_blank">FACEBOOK</a>
            </div>
          </div>


          <div className="copyright">
            <p><span>&#169;</span>2021</p>
          </div>
        </footer>
      </div>
  )
} // Sovellus loppuu tähän...

export default App
