const {
  getToken
} = require('../controllers/auth')

module.exports = (app) => {
  app.get('/token', (req, res) => {
    return getToken(res)
  })
}