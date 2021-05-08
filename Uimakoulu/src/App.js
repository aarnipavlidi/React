import React, { useState } from 'react' // Sovellus ottaa "react" nimisen kirjaston käyttöönsä, joka myös hyödyntää "useState" ja "useEffect" funktioita.
import GetContent from './components/Content'
import Notification from './components/Notification'

const App = () => { // Sovellus alkaa tästä...

  const [content, setContent] = useState('')

  const [status, setStatus] = useState(null)
  const [statusMessage, setStatusMessage] = useState(null)

  const getNotification = async (message) => {
    const response = await message
    setStatus(response.status)
    setStatusMessage(response.message)
    setTimeout(() => {
      setStatus(null)
      setStatusMessage(null)
    }, 6000)
  }

  return (
    <div className="app-container">
      <nav className="navbar navbar-expand-lg navbar-light custom-nav-color">
          <a className="navbar-brand">Santun Uimakoulu</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item text-center">
                <button onClick={() => setContent('Etusivu')}>Etusivu</button>
              </li>
              <li className="nav-item text-center">
                <button onClick={() => setContent('Hinnasto')}>Hinnasto</button>
              </li>
              <li className="nav-item text-center">
                <button onClick={() => setContent('Ota yhteyttä')}>Ota yhteyttä</button>
              </li>
            </ul>
          </div>
      </nav>

      <div className="app-content container">
        <div className="content-style container shadow-lg rounded">
          <div className="notification-box">
            <Notification message={statusMessage} checkStatus={status} />
          </div>
          <GetContent checkContent={content} responseMessage={getNotification} />
        </div>
      </div>

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
