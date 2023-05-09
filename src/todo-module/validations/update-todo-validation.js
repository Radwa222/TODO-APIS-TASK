const { check } = require('express-validator');
module.exports = [
  check('title')
    .trim()
    .isString()
    .withMessage('type must be string')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('invalid length')
    .optional(),
  check('desc')
    .trim()
    .isString()
    .withMessage('type must be string')
    .bail()
    .isLength({ min: 5, max: 1000 })
    .withMessage('invalid length')
    .optional(),
];
