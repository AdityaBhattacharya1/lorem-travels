require('dotenv').config()

module.exports = (on, config) => {
  // copy any needed variables from process.env to config.env
  config.env.prod_url = process.env.PROD_URL

  // do not forget to return the changed config object!
  return config
}
