const mongoose = require('mongoose');
const { schema } = require('./schema');
const Collection = mongoose.model('Collection', schema);

module.exports = { Collection };
