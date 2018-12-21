const {
    checkAnswer,
    getAnswer
} = require('../controllers/answer')

const voice2text = require('../middlewares/voice2text')

module.exports = (app) => {
    app.post('/answer/get', voice2text, getAnswer)
    app.post('/answer/check', checkAnswer)
}