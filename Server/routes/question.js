const {
  getQuestion
} = require('../controllers/question')

module.exports = (app) => {
  app.post('/question', getQuestion)
}