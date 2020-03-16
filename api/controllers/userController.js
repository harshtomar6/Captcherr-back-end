// Dependencies
const { User } = require('./../models');
const { generateToken } = require('./../utils');

// Create new User
const addNewUser = async (name, email, password) => {
  try {
    let ifUser = await User.findOne({ email });
    if(ifUser)
      return { err: 'User already registered!', status: 400, data: null };

    let user = new User({ name, email });
    user.password = user.genHash(password)
    let savedUser = await user.save();
    
    return { err: null, status: 201, data: savedUser };

  } catch (err) {
    return { err: err.toString(), status: 500, data: null }
  }
}

// Login an user
const loginUser = async (email, password) => {
  try {
    let user = await User.findOne({ email });

    if(!user)
      return { err: 'No user Exists! Please Sign up', status: 401, data: null };

    if(user.compareHash(password))
      return { err: null, status: 200, data: generateToken(user) }

    return { err: 'Invalid Password', status: 401, data: null }
  } catch (err) {
    return { err: err.toString(), status: 500, data: null }
  }
}

module.exports = {
  addNewUser,
  loginUser
}