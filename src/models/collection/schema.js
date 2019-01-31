const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: [true],
  },
  size: {
    type: Number,
    required: [true],
  }
});

module.exports = { schema };
