const { belongsToUser } = require('./middlewares/belongToUser.middleware');
const {
  createHandler,
  showHandler,
  updateHandler,
  removeHandler,
  userTodosHandler,
} = require('./todo.controller');
const { createValidations, updateValidations } = require('./validations');

const router = require('express').Router();

router.post('/', createValidations, createHandler);

router.get('/all', userTodosHandler);
router.get('/:id', belongsToUser(), showHandler);
router.patch('/:id', belongsToUser(), updateValidations, updateHandler);
router.delete('/:id', belongsToUser(), removeHandler);

module.exports = router;
