const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo',
    },
  ],
});

exports.User = mongoose.model('User', userSchema);
