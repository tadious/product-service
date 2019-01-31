const get = ({ Product }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const product = await Product.findOne({ _id });
    res.status(200).send({ product });
  } catch (error) {
    next(error);
  }
};

module.exports= { get };
