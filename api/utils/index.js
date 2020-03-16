// Dependencies
const jwt = require('jwt-simple');
const { User } = require('./../models');

const generateToken = user => {
  let token = jwt.encode({
    _id: user._id
  }, process.env.SECRET);

  return {
    token,
    user
  }
}

const validateUser = async (req, res, next) => {
  let token = req.headers["authorization"];

  if(!token || !token.includes("Bearer ")) {
    res.status(400).send({ err: 'Invalid Token Format!', data: null });
    return
  }

  token = token.split(' ')[1];
  let decoded = jwt.decode(token, process.env.SECRET);
  let user = await User.findById(decoded._id);

  if(!user) {
    res.status(400).send({ err: 'No User found!', data: null });
  }

  req.user = user;
  next()
}

module.exports = {
  generateToken,
  validateUser
}