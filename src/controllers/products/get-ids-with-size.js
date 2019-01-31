const { NotAcceptable } = require('rest-api-errors');
const { sendOne } = require('../../middleware');
const _ = require('lodash');

const getIdsWithSize = ({ Collection, Product }, { config }) => async (req, res, next) => {
  const { _size } = req.params;
  try {
    const collections = await Collection.find({ size: _size });
    const collectionIds = collections.map(product => product.id);
    const products = await Product.find({ 'collectionId': { $in: collectionIds } });
    const productIds = products.map(product => product.id);
    res.status(200).send({ productIds });
  } catch (error) {
    next(error);
  }
};

module.exports= { getIdsWithSize };
