const { Todo } = require('./todo.model');

exports.create = async (data, user) => {
  const todo = new Todo({
    ...data,
    user: user._id,
  });
  return await todo.save();
};

exports.show = async (id) => {
  return await Todo.findById(id).exec();
};

exports.update = async (id, data) => {
  const todo = await Todo.findById(id).exec();
  if (!todo) return null;
  Object.assign(todo, data);
  return await todo.save();
};

exports.delete = async (_id) => {
  return await Todo.deleteOne({ _id });
};
