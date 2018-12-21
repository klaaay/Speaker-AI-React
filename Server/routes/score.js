const {
    getScore
} = require('../controllers/score')

module.exports = (app) => {
    app.post('/score', getScore)
}