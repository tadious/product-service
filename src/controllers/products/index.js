const { Router: router } = require('express');

const { get } = require('./get');
const { list } = require('./list');
const { getIdsWithSize } = require('./get-ids-with-size');

module.exports = (models, { config }) => {
  const api = router();

  api.get('/', list(models, { config }));
  api.get('/:_id', get(models, { config }));
  api.get('/size/:_size/ids', getIdsWithSize(models, { config }));

  return api;
};