const io = require('../socket')

exports.getScore = (req, res, next) => {
    console.log(req.body)
    //此处调用评分接口
    io.getIO().emit('score', { score: 85 })
    return "";
};