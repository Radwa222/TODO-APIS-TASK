const { User } = require('./user.model');

exports.create = async (data) => {
  const user = new User(data);
  return await user.save();
};

exports.findOne = async (id) => {
  return await User.findById(id).exec();
};

exports.getByEmail = async (email) => {
  return await User.findOne({ email }).exec();
};
