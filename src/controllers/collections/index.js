const { Router: router } = require('express');

const { list } = require('./list');
const { getProductIds } = require('./get-product-ids');

module.exports = (models, { config }) => {
  const api = router();

  api.get('/', list(models, { config }));
  api.get('/:_id/product-ids', getProductIds(models, { config }));

  return api;
};