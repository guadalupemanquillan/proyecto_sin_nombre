const User = require('../../models/user.model');

exports.createNewUserService = async (data) => {
  const newUser = new User(data);
  const savedUser = await newUser.save();
  return savedUser;
};
