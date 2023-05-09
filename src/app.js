const express = require('express');
const passport = require('passport');
const { todoRoutes } = require('./todo-module');
const { authRoutes } = require('./auth');
const { userRoutes } = require('./user-module');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
require('./auth/strategies/jwt-strategy')(passport);

app.use(passport.initialize());
app.use(passport.authenticate('jwt', { session: false }));
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/user/todo', todoRoutes);

module.exports = app;
