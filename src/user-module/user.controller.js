exports.getProfile = (req, res) => {
  const user = req.user.toObject();
  delete user.password;
  return res.status(201).send({ data: user });
};
