const request = require('request');
const keys = require('../config')

var text, accessToken, result;

let API_KEY = keys.API_KEY;
let SECRET_KEY = keys.SECRET_KEY;
let cuid = keys.cuid;

exports.voice2text = (res, bufData, socket) => {
  let tokenGetOption = {
    url: `https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET_KEY}`,
    method: 'GET',
    json: true
  };
  function getToken(err, response, data) {
    if (!err && data) {
      accessToken = data.access_token;
      let voice2textOption = {
        headers: {
          'Content-Type': 'audio/wav; rate=16000',
          'Content-Length': bufData.length
        },
        url: `http://vop.baidu.com/server_api?dev_pid=1737&cuid=${cuid}&token=${accessToken}`,
        method: "POST",
        json: true,
        formData: {
          my_buffer: bufData
        }
      };
      function voice2text(err, response, data) {
        if (!err && data) {
          result = data && data.result || [];
          text = result.join();
          console.log(text)
          // 判断是否存在反问接口
          // 如果有反问 此处返回面试者回答问题的答案 和 反问的答案
          // 否则 只返回回答问题的答案

          // 当前为fake接口默认返回回答问题的答案 和 默认的反问的答案"You can get 3000￥ per month"
          return res.json({
            questionAnswer: text,
            backAnswer: "You can get 3000￥ per month"
          });
        }
      }
      request(voice2textOption, voice2text)
    }
  }
  request(tokenGetOption, getToken);
};