const { NotAcceptable } = require('rest-api-errors');
const { sendCreated } = require('../../middleware');
const _ = require('lodash');

const dataImport = ({ Collection, Product }, { config }) => async (req, res, next) => {
  try {
    const importCollections = req.body;
    
    importCollections.forEach(async importCollection => {
      let collection, product;
      let products = [];
      collection = new Collection();
      _.extend(collection, { name: importCollection.collection, size: importCollection.size });
      await collection.save();
      
      importCollection.products.forEach(async importProduct => {
        products.push(Object.assign({}, importProduct, { collectionId: collection.id }));
      });
      await Product.insertMany(products);

     });

    return sendCreated(res, { ok: true });
  } catch (error) {
    next(error);
  }
};

module.exports= { dataImport };
