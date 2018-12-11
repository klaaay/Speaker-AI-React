const { voice2text } = require('../controllers/voice')
const getVoiceData = require('../utils/getVoiceData')

module.exports = (app) => {
  app.post('/voice', (req, res) => {
    var chunks = [];
    var size = 0;
    req.on('data', function (chunk) {
      chunks.push(chunk);
      size += chunk.length;
    });
    req.on('end', function () {
      var data = getVoiceData(chunks, size)
      return voice2text(res, data);
    });
  });
}