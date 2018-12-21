const initQuestions = require('../questions/initQuestions')

const getRandomQ = require('../utils/getRandomQ')

exports.getQuestion = (req, res, next) => {
  const question = getRandomQ(initQuestions)
  return res.send(question)
};