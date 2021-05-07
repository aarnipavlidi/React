// As early as posssible in your application, require and configure dotenv. More information about it @ https://www.npmjs.com/package/dotenv
require("dotenv").config() // Alustetaan "dotenv" kirjaston hyödyntämistä tässä sovelluksessa. Tämän avulla haetaan kaikki muuttujien arvot ".env" tiedostosta ja palautetaan takaisin sovelluksen käytettäväksi.

const EMAIL_SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID
const EMAIL_TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID
const EMAIL_USER_ID = process.env.REACT_APP_EMAIL_USER_ID

module.exports = { // Viedään kyseiset muuttujat "EMAIL_KEY" sovelluksen käytettäväksi erillisenä moduulina.
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_USER_ID
}
