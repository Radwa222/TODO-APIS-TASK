const todoService = require('./todo.service');
const { validate } = require('./validations');

exports.createHandler = async (req, res) => {
  console.log(req.user);
  const errors = validate(req);
  if (errors) return res.status(400).send({ errors });
  try {
    const todo = await todoService.create(req.body, req.user);
    // do some checkings
    return res.status(201).send({ data: todo });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
};

exports.showHandler = async (req, res) => {
  try {
    const todo = await todoService.show(req.params.id);
    return res.status(200).send({ data: todo });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
};

exports.updateHandler = async (req, res) => {
  const errors = validate(req);
  if (errors) return res.status(400).send({ errors });
  try {
    const todo = await todoService.update(req.params.id, req.body);
    return res.status(200).send({ data: todo });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
};

exports.removeHandler = async (req, res) => {
  try {
    const todo = await todoService.delete(req.params.id);
    return res.status(200).send(todo);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
};
