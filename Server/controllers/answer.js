const io = require('../socket')

exports.getAnswer = (req, res, next) => {
    io.getIO().emit('answer', { answer: req.questionAnswer })
    return res.json({
        questionAnswer: req.questionAnswer,
        backAnswer: req.backAnswer
    });
}

exports.checkAnswer = (req, res, next) => {
    return res.send(false)
};