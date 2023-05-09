const { check } = require('express-validator');
module.exports = [
  check('title')
    .trim()
    .isString()
    .withMessage('title must be string')
    .isLength({ min: 3, max: 50 })
    .withMessage('invalid length'),

  check('desc')
    .isString()
    .withMessage('desc must be string')
    .bail()
    .isLength({ min: 5, max: 1000 })
    .withMessage('invalid length'),
];
