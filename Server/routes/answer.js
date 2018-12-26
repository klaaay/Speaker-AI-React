const {
    checkAnswer,
    getAnswer
} = require('../controllers/answer')

const voice2text = require('../middlewares/voice2text')
const voice2textX = require('../middlewares/voice2textX')

module.exports = (app) => {
    app.post('/answer/get', voice2text, getAnswer)
    app.post('/answer/check', checkAnswer)
}