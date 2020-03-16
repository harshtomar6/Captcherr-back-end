// Dependencies
const express = require('express');
const router = express.Router();
const { captchaController } = require('./../controllers');
const captcha = require('svg-captcha');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Access-Token, X-Key");
  next();
});

// POST '/captcha' to create a new captcha
router.post('/', async (req, res) => {
  let svgCaptcha = captcha.create({ background: '#cc9966' });
  let userId = req.body.key;

  if(!userId)
    return res.status(400).send({ err: 'API Key not present!', data: null })

  let { err, status, data } = await captchaController.addCaptcha(svgCaptcha.text, svgCaptcha.data, userId);
  res.status(status).send({ err, data })
});

// POST '/captcha/validate' to validate captcha
router.post('/validate', async (req, res) => {
  let { captchaId, text, key } = req.body

  if(!captchaId || !text || !key)
    return res.status(400).send({ err: 'Required Fields are not present!', data: null });

  let { err, status, data } = await captchaController.validateCaptcha(captchaId, text, key);
  res.status(status).send({ err, data })
})

module.exports = router;