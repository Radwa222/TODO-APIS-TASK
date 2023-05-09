const mongoose = require('mongoose');
const { Todo } = require('../todo-module/todo.model');

const userSchema = new mongoose.Schema(
  {
    frist_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: 'Email address is required',
      unique: true,
      trim: true,
    },
    password: { type: String, required: true, trim: true },
    active: { type: Boolean, default: true },
    age: { type: Number, min: 18 },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

userSchema.virtual('todos', {
  ref: 'Todo',
  localField: '_id',
  foreignField: 'user',
});

userSchema.pre('remove', async (next) => {
  const user = this;
  await Todo.deleteMany({ user: user._id });
  next();
});

exports.User = mongoose.model('User', userSchema);
