const { check } = require('express-validator');
module.exports = [
  check('frist_name').isString().bail().isLength({ min: 3, max: 20 }),
  check('last_name').isString().bail().isLength({ min: 3, max: 20 }),
  check('email').isEmail().withMessage('invalid email format'),
  check('password').isStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  }),
  check('password_confirmation').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    return true;
  }),
];
