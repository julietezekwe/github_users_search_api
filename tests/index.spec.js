/* eslint-disable prefer-template */
/* eslint-disable no-undef */
import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);
const mock = {
  username: 'julietezekwe',
  language: 'javascript',
  invalidLang: ' ',
};
const { expect } = chai;

describe('Endpoint', () => {
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
    it('should return error status when invalid route is reached', (done) => {
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
  describe('GET /', () => {
    it('should return error when invalid or incomplete params provided', (done) => {
      chai.request(app)
        .get('/api/v1/users/juliet/go')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message)
            .eql('Successfully retrieves users');
          done();
        });
    });
    it('should return error when invalid or incomplete params provided', (done) => {
      chai.request(app)
        .get('/api/v1/users/   /go?fallbacks=python,javascript')
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message)
            .eql('invalid parameter,please provide a valid string');
          done();
        });
    });
    it('should return error when invalid or incomplete params provided', (done) => {
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
    it('should return error when invalid or incomplete params provided', (done) => {
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
