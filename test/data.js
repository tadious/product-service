process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');

const data = require('./fixtures/products');
const app = require('../app');

const { Collection } = require('../src/models/collection');
const { Product } = require('../src/models/product');

const should = chai.should();
chai.use(chaiHttp);

describe('Data import', () => {
  beforeEach(async (done) => {
    await Product.remove();
    await Collection.remove();        
  });
  
  describe('/POST data', () => {
    it('it should save imported collections and data', (done) => {
      chai.request(app)
        .post('/api/v1/data/import')
        .send(data)
        .then((res) => {
          res.should.have.status(200);
          Collection.find().count().should.not.be.eql(0);
          Product.find().count().should.not.be.eql(0);
          done();
        });
    });
  });
});