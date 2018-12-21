const io = require('../socket')

exports.getQuestion = (req, res, next) => {
  console.log(req.question)
  io.getIO().emit('question', { question: req.question })
  return res.send(req.question)
};