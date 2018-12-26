var MD5 = require("md5-node");

var origin = {
  engine_type: "sms-en16k",
  aue: "raw"
};

var Param = new Buffer(JSON.stringify(origin)).toString("base64");
var CurTime = new Date().getTime().toString();
var APIKey = "529809f96c56cf04d6a84cdf6a2cc41d";
var checkSum = MD5(APIKey + CurTime + Param);

module.exports = {
  "X-Appid": "5bf512c0",
  "X-CurTime": CurTime,
  "X-Param": Param,
  "X-CheckSum": checkSum
};
