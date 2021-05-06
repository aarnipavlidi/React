import React, { useState } from 'react' // Sovellus ottaa "react" nimisen kirjaston käyttöönsä, joka myös hyödyntää "useState" ja "useEffect" funktioita.

const Content = ({ checkContent }) => {

  const [clientName, setClientName] = useState('')
  const [clientLastname, setClientLastname] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientNumber, setClientNumber] = useState('')
  const [clientMessage, setClientMessage] = useState('')

  if (checkContent === 'Hinnasto') {
    return (
      <div className="app-content content-style container">
        <h2>Hinnasto :D</h2>
      </div>
    )
  }

  if (checkContent === 'Ota yhteyttä') {
    return (
      <div className="app-content form-style container">

      <form>
        <div className="row">
          <div className="col">
            <label className="form-label">Etunimi</label>
            <input
            type="text"
            value={clientName}
            className="form-control"
            onChange={({ target }) => setClientName(target.value)}
            />
          </div>
          <div className="col">
            <label className="form-label">Sukunimi</label>
            <input
            type="text"
            value={clientLastname}
            className="form-control"
            onChange={({ target }) => setClientLastname(target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className="form-label">Sähköposti</label>
            <input
            type="email"
            value={clientEmail}
            className="form-control"
            onChange={({ target }) => setClientEmail(target.value)}
            />
          </div>
          <div className="col">
            <label className="form-label">Puhelinnumero</label>
            <input
            type="email"
            value={clientNumber}
            className="form-control"
            onChange={({ target }) => setClientNumber(target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Viestikenttä</label>
          <textarea className="form-control" rows="5" value={clientMessage} onChange={({ target }) => setClientMessage(target.value)}></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-sm">Lähetä</button>
      </form>


      </div>
    )
  }

  return (
    <div className="app-content content-style container">
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
