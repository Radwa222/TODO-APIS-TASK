const { validationResult } = require('express-validator');
module.exports = {
  createValidations: require('./create-todo.validation'),
  updateValidations: require('./update-todo-validation'),

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
