const request = require('request');
const keys = require('../config')

let API_KEY = keys.API_KEY;
let SECRET_KEY = keys.SECRET_KEY;

exports.getToken =  (res) =>{
  let tokenGetOption = {
      url: `https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET_KEY}`,
      method: 'GET',
      json: true
  };
  function getToken(err, response, data) {
      if (!err && data) {
          return res.send(data.access_token);
      }
  }
  request(tokenGetOption, getToken);
};