import React, { useState } from 'react' // Sovellus ottaa "react" nimisen kirjaston käyttöönsä, joka myös hyödyntää "useState" ja "useEffect" funktioita.
import emailjs from 'emailjs-com'

const config = require('../utils/config') // Alustetaan muuttuja "config", joka hyödyntää "config.js" (erillinen moduuli) tiedostoa eli => "./utils/config.js".

const Content = ({ checkContent, responseMessage }) => {

  const [contactForm, setContactForm] = useState({
    from_name: '',
    from_lastname: '',
    from_number: '',
    message: '',
    reply_to: '',
    to_name: 'Aarni Pavlidi'
  })

  const [loadingButton, setLoadingButton] = useState(false)
  const showLoading = { display: loadingButton ? '' : 'none' }
  const hideLoading = { display: loadingButton ? 'none' : '' }

  const handleFormSend = async (event) => {
    event.preventDefault()
    setLoadingButton(true)
    try {
      const response = await emailjs.send(config.EMAIL_SERVICE_ID, config.EMAIL_TEMPLATE_ID, contactForm, config.EMAIL_USER_ID)
      setContactForm({
        from_name: '',
        from_lastname: '',
        from_number: '',
        message: '',
        reply_to: ''
      })
      console.log('You have successfully forwarded the forms message! :)', response.status, response.text)
      setLoadingButton(false)
      responseMessage({
        message: 'Kiitoksia yhteydenotosta! Olemme teihin yhteydessä mahdollisimman pian.',
        status: true
      })
    } catch (error) {
      setContactForm({
        from_name: '',
        from_lastname: '',
        from_number: '',
        message: '',
        reply_to: ''
      })
      console.log('There was a problem sending the forms message. Please try again later! :)', error)
      setLoadingButton(false)
      responseMessage({
        message: 'Viestin lähettäminen epäonnistui! Yrittäkää kokeilla uudestaan myöhemmin.',
        status: false
      })
    }
  }

  const handleForm = (event) => {
    event.preventDefault()
    setContactForm({ ...contactForm, [event.target.name]: event.target.value })
  }

  if (checkContent === 'Hinnasto') {
    return (
      <div>
        <h2>Hinnasto</h2>
        <p>work in progress</p>
      </div>
    )
  }

  if (checkContent === 'Ota yhteyttä') {
    return (
      <div className="form-style">
        <div>
          <h2 className="text-center">Yhteydenottolomake</h2>
        </div>
        <form onSubmit={handleFormSend}>
          <div className="row">
            <div className="col">
              <label for='validationClientName' className="form-label">Etunimi</label>
              <input
              type="text"
              name='from_name'
              value={contactForm.from_name}
              className="form-control"
              onChange={handleForm}
              id='validationClientName'
              required
              />
            </div>
            <div className="col">
              <label for='validationClientLastname' className="form-label">Sukunimi</label>
              <input
              type="text"
              name='from_lastname'
              value={contactForm.from_lastname}
              className="form-control"
              onChange={handleForm}
              id='validationClientLastname'
              required
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label for='validationClientEmail' className="form-label">Sähköposti</label>
              <input
              type="email"
              name='reply_to'
              value={contactForm.reply_to}
              className="form-control"
              onChange={handleForm}
              id='validationClientEmail'
              required
              />
            </div>
            <div className="col">
              <label for='validationClientNumber' className="form-label">Puhelinnumero</label>
              <input
              type="number"
              name='from_number'
              value={contactForm.from_number}
              className="form-control"
              onChange={handleForm}
              id='validationClientNumber'
              required
              />
            </div>
          </div>

          <div className="mb-3">
            <label for='validationClientMessage' className="form-label">Viestikenttä</label>
            <textarea className="form-control" rows="5" name='message' value={contactForm.message} onChange={handleForm} id='validationClientMessage' required></textarea>
          </div>
          <div style={hideLoading}>
            <div className="text-center">
              <button type="submit" className="btn btn-outline-dark">Lähetä</button>
            </div>
          </div>
          <div style={showLoading}>
            <div className="text-center">
              <button type="button" className="btn btn-dark" disabled><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Lähettää...</button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div>
      <div>
        <h2>Yksityinen uimakoulu Oulussa</h2>
      </div>

      <div>
        <p>Järjestän yksityistä uimaopetusta kaiken ikäisille ja tasoisille lapsille sekä nuorille! Opetus tapahtuu pääasiassa
        Oulun uimahallissa, mutta opetuspaikan järjestäminen muualla on neuvoteltavissa.</p>
        <p>Työskentelen tällä hetkellä Oulun Lohien juniorivalmennusvastaavana, ja olen toiminut jo useita vuosia valmentajana
        Helsingin Simmiksessä, jossa olen toiminut Rollo-, IKM-, ja NSM-ikäisten ryhmissä vastuuvalmentajana.</p>
        <p>Kiinnostuitko? Ota  rohkeasti yhteyttä, niin sovitaan yhdessä aika yksityiseen uimaopetukseen!</p>
      </div>

      <div className="ratio ratio-21x9 justify-content-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1685.5863428945438!2d25.495589216336505!3d65.00924905030993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cd53839d48e5%3A0x271114ad31124a78!2sOulun%20Uimahalli!5e0!3m2!1sen!2sfi!4v1620219229195!5m2!1sen!2sfi"
          width="400"
          height="300"
          className="embed-responsive-item"
          allowfullscreen=""
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default Content
