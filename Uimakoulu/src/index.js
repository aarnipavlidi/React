import React from 'react' // Sovellus ottaa "react" nimisen kirjaston käyttöönsä.
import ReactDOM from 'react-dom' // Sovellus ottaa "react-dom" nimisen kirjaston käyttöönsä.
import App from './App' // Sovellus ottaa "App.js" tiedoston sisällön käyttöönsä.
import 'bootstrap/dist/css/bootstrap.css'
import './index.css' // Sovellus ottaa "index.css" (tyylitiedosto) tiedoston sisällön käyttöönsä.
import './css/footer.css'

ReactDOM.render(<App />, document.getElementById('root'))
