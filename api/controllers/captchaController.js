// Dependencies
const { Captcha } = require('../models');

const addCaptcha = async (text, svg) => {
  try { 
    let captcha = new Captcha({ text, svg });
    let savedCaptcha = await captcha.save(); 

    return { err: null, status: 201, data: savedCaptcha }
  } catch (err) {
    return { err: err.toString(), status: 500, data: null }
  }
}

const validateCaptcha = async (captchaId, text) => {
  try {
    let captcha = await Captcha.findById(captchaId);

    if(!captcha)
      return { err: 'No Captcha Found!', status: 400, data: null };

    captcha.solved = true;
    if(captcha.text === text){
      captcha.validated = true;
      await captcha.save();
      return { err: null, status: 200, data: captcha };
    }

    captcha.validated = false;
    await captcha.save();
    return { err: null, status: 200, data: captcha }

  } catch (err) {
    return { err: err.toString(), status: 500, data: null }
  }
}

module.exports = {
  addCaptcha,
  validateCaptcha
}