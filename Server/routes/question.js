const {
  getQuestion
} = require('../controllers/question')

const questionSelector = require('../middlewares/questionSelector')

module.exports = (app) => {
  app.post('/question', questionSelector, getQuestion)
}