const { getProfile } = require('./user.controller');

const router = require('express').Router();

router.get('/profile', getProfile);

module.exports = router;
