const request = require('request');
const keys = require('../configX')

const getVoiceDataBase = require('../utils/getVoiceDataBase')

var MD5 = require('md5-node');


module.exports = (req, res, next) => {

    var chunks = [];
    var size = 0;
    req.on('data', function (chunk) {
        chunks.push(chunk);
        size += chunk.length;
    });
    req.on('end', function () {
        var bufDataBase = getVoiceDataBase(chunks, size)
        console.log(bufDataBase)

        var origin = {
            engine_type: "sms-en16k",
            aue: "raw"
        };
        var Param = new Buffer(JSON.stringify(origin)).toString("base64");
        console.log(Param)
        var CurTime = new Date().getTime().toString();
        console.log(CurTime)
        var APIKey = "529809f96c56cf04d6a84cdf6a2cc41d";
        var checkSum = MD5(APIKey + CurTime + Param);
        console.log(checkSum)

        let voice2TextXOption = {
            url: `http://api.xfyun.cn/v1/service/v1/iat`,
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Appid": "5bf512c0",
                "X-CurTime": CurTime,
                "X-Param": Param,
                "X-CheckSum": checkSum
            },
            form: {
                audio: bufDataBase
            }
        };
        function voice2text(err, response, data) {
            if (!err && data) {
                console.log(data)
                console.log(data.data)
                req.questionAnswer = data.data;
                req.backAnswer = "You can get 3000￥ per month"
                next()
            }
        }
        request(voice2TextXOption, voice2text);
    });
}