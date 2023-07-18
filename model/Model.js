const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('crud', crudSchema);

module.exports = User;
