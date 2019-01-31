const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const getProductIds = ({ Product }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const products = await Product.find({ collectionId: new ObjectId(_id) }).select('_id');
    const productIds = products.map(product => product.id);
    res.status(200).send({ productIds });
  } catch (error) {
    next(error);
  }
};

module.exports= { getProductIds };
