const mongoose = require('mongoose');

const connectToDb = async (uri) => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connectToDb;
