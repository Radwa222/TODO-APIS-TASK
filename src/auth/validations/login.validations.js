const { check } = require('express-validator');
module.exports = [
  check('email').isEmail().withMessage('invalid email format'),
  check('password').isString().bail().isLength({ min: 6 }),
];
