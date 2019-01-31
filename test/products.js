process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const { Product } = require('../src/models/product');

const should = chai.should();
chai.use(chaiHttp);

describe('Products', () => {
  beforeEach((done) => {
    Product.remove({}, (err) => { 
      done();           
    });        
  });
  
  describe('/GET products', () => {
    it('it should GET all the products', (done) => {
      chai.request(app)
        .get('/api/v1/products')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.products.should.be.an('array');
          res.body.products.length.should.be.eql(0);
          done();
        });
    });
  });
});