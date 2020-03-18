// Dependencies
const { Captcha, User } = require('../models');

// Controller to add new captcha
const addCaptcha = async (text, svg, userId) => {
  try {
    let user = await User.findById(userId);
    if(!user) return { err: 'Invalid Key! No User Found', status: 400, data: null }

    let captcha = new Captcha({ text, svg, user: userId });
    let savedCaptcha = await captcha.save(); 

    return { err: null, status: 201, data: savedCaptcha }
  } catch (err) {
    return { err: err.toString(), status: 500, data: null }
  }
}

// controller to validate an existing captcha
const validateCaptcha = async (captchaId, text, key) => {
  try {
    let user = await User.findById(key);
    if(!user) return { err: 'Invalid Key! No User Found', status: 400, data: null };
    let captcha = await Captcha.findById(captchaId);

    if(!captcha)
      return { err: 'No Captcha Found!', status: 400, data: null };

    if(captcha.solved)
      return { err: 'Captcha already solved', status: 400, data: null };

    captcha.solved = true;

    let resData = {
      _id: captcha._id,
      solved: captcha.solved,
      user: captcha.user,
      createdAt: captcha.createdAt
    };
    if(captcha.text === text){
      captcha.validated = true;
      resData.validated = true;
      await captcha.save();
      return { err: null, status: 200, data: resData };
    }

    captcha.validated = false;
    resData.validated = false;
    await captcha.save();
    return { err: null, status: 200, data: resData }

  } catch (err) {
    return { err: err.toString(), status: 500, data: null }
  }
}

module.exports = {
  addCaptcha,
  validateCaptcha
}