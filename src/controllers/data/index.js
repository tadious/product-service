const { Router: router } = require('express');

const { dataImport } = require('./import');

module.exports = (models, { config }) => {
  const api = router();

  api.post('/import', dataImport(models, { config }));
  api.put('/import', dataImport(models, { config }));
  api.patch('/import', dataImport(models, { config }));

  return api;
};