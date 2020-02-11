/* eslint-disable prefer-template */
/* eslint-disable no-undef */
import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);
const { expect } = chai;

describe('API Tests', () => {
  describe('Entry File Tests /', () => {
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
    it('should return a welcome message when the status route is visited', (done) => {
      chai.request(app)
        .get('/status')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message)
            .eql('Welcome to search api');
          done();
        });
    });
  });
  describe('Enpoint and Validations', () => {
    it('should return success when the endpoint is hit with the right parameters', (done) => {
      chai.request(app)
        .get('/api/v1/users/juliet/go')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message)
            .eql('Successfully retrieves users');
          done();
        });
    });
    it('should return a descriptive error messages when the endpoint is hit with the wrong parameters', (done) => {
      chai.request(app)
        .get('/api/v1/users/   /go?fallbacks=python,javascript')
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message)
            .eql('invalid parameter,please provide a valid string');
          done();
        });
    });
    it('should return a descriptive error messages when the fallback provided is invalid', (done) => {
      chai.request(app)
        .get('/api/v1/users/juliet/go?fallbacks= , ,javascript')
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.success).to.equal(false);
          expect(res.body.message)
            .eql('invalid parameter, Please make sure all provided params are valid strings');
          done();
        });
    });
    it('should fetch users from the fallback languages provided when the default returns no result', (done) => {
      chai.request(app)
        .get('/api/v1/users/julietezekwe/go?fallbacks=python,javascript')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.result.fromFallBack)
            .eql(true);
          expect(res.body.message)
            .eql('Successfully retrieves users');
          done();
        });
    });
  });
});
