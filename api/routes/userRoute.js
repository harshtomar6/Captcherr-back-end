// Dependencies
const express = require('express');
const router = express.Router();
const { userController } = require('./../controllers');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Access-Token, X-Key");
  next();
});

// POST '/user/signup' to create new user
router.post('/signup', async (req, res) => {

  if(!req.body.name || !req.body.email || !req.body.password) {
    res.status(400).send({ err: 'Required Fields are not present', data: null });
    return
  }

  let { err, status, data } = await userController.addNewUser(req.body.name, req.body.email, req.body.password)
  res.status(status).send({ err, data })
});

// POST '/user/login' to authenticate an user
router.post('/login', async (req, res) => {
  
  if(!req.body.email || !req.body.password) {
    res.status(400).send({ err: 'Required Fields are not present', data: null });
    return;
  }

  let { err, status, data } = await userController.loginUser(req.body.email, req.body.password);
  res.status(status).send({ err, data });
});

module.exports = router;
