const selfIntro = require("../questions/selfIntro");
const academicSituation = require("../questions/academicSituation");
const industryTechnology = require("../questions/industryTechnology");

const getRandomQ = require("../utils/getRandomQ");

module.exports = (req, res, next) => {
  console.log(req.body);
  const { questionLevel } = req.body;
  switch (questionLevel) {
    case 1:
      req.question = getRandomQ(selfIntro);
      req.done = false;
      break;
    case 2:
      req.question = getRandomQ(academicSituation);
      req.done = false;
      break;
    case 3:
      req.question = getRandomQ(industryTechnology);
      req.done = true
      break;
    default:
      break;
  }
  next();
};
