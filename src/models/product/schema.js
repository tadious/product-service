const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  name: {
    type: String,
    required: [true],
  },
  image: {
    type: String,
    required: [true],
  },
  sku: {
    type: [String],
  },
  collectionId: {
    type: ObjectId,
  }
});

module.exports = { schema };
