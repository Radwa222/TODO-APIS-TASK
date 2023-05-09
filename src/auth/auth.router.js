const { signUpHandler, loginHandler } = require('./auth.controller');
const { signUpValidations, loginValidations } = require('./validations');

const router = require('express').Router();
router.post('/signup', signUpValidations, signUpHandler);
router.post('/login', loginValidations, loginHandler);

module.exports = router;
