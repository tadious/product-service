const express = require('express');

const { errorHandler } = require('../middleware');
// list of models here
const { Collection } = require('../models/collection');
const { Product } = require('../models/product');

// list of controllers here
const collections = require('../controllers/collections');
const products = require('../controllers/products');
const data = require('../controllers/data');

// combine models ino one object
const models = { Collection, Product };

const routersInit = config => {
  const router = express();

  // register api points
  router.use('/collections', collections(models, { config }));
  router.use('/products', products(models, { config }));
  router.use('/data', data(models, { config }));

  // catch api all errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;