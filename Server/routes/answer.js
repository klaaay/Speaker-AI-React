const {
    checkAnswer
} = require('../controllers/answer')

module.exports = (app) => {
    app.post('/answer/check', checkAnswer)
}