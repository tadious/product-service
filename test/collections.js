process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const { Collection } = require('../src/models/collection');

const should = chai.should();
chai.use(chaiHttp);

describe('Collections', () => {
  beforeEach((done) => {
    Collection.remove({}, (err) => { 
      done();           
    });        
  });
  
  describe('/GET collections', () => {
    it('it should GET all the collections', (done) => {
      chai.request(app)
        .get('/api/v1/collections')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.collections.should.be.an('array');
          res.body.collections.length.should.be.eql(0);
          done();
        });
    });
  });
});