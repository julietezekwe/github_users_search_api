/* eslint-disable no-undef */
import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Root Endpoint', () => {
  describe('GET /', () => {
    it('should return error status when invalid route is reached', (done) => {
      chai.request(app)
        .get('/helloworld')
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.message)
            .eql('Well, will you help build this route? 🤷🏼‍♂️');
          done();
        });
    });
  });
});
