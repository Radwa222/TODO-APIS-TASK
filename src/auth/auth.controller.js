const { HttpException } = require('../error-handler/http-exceptions');
const { signUp, login } = require('./auth.service');
const { validate } = require('./validations');

exports.signUpHandler = async (req, res) => {
  try {
    const errors = validate(req);
    if (errors) return res.status(400).send({ errors });
    const user = await signUp(req.body);
    res.status(201).send(user);
  } catch (e) {
    if (e instanceof HttpException) return res.status(e.code).send(e);
    return res.status(500).send(e);
  }
};

exports.loginHandler = async (req, res) => {
  try {
    const errors = validate(req);
    if (errors) return res.status(400).send({ errors });
    const user = await login(req.body);
    res
      .status(200)
      .send({ data: { message: 'user created successfully', user } });
  } catch (e) {
    if (e instanceof HttpException) return res.status(e.code).send(e);
    return res.status(500).send(e);
  }
};
