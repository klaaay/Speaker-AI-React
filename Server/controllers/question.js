const initQuestions = require('../questions/initQuestions')

const getRandomQ = require('../utils/getRandomQ')

const io = require('../socket')

exports.getQuestion = (req, res, next) => {
  const question = getRandomQ(initQuestions)
  io.getIO().emit('question', { ...{ question }, test: 'test' });
  return res.send(question)
};