const { validationResult } = require('express-validator');

module.exports = {
  signUpValidations: require('./signup.validations'),
  loginValidations: require('./login.validations'),

  validate: (request) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      const validationErrors = {};
      errors.array().forEach((err) => {
        validationErrors[err.path] = err.msg;
      });
      return validationErrors;
    }
  },
};
