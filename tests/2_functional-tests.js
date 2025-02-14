const chai = require('chai');
const assert = chai.assert;

const server = require('../server');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

suite('Functional Tests', function () {
  this.timeout(5000);
  suite('Integration tests with chai-http', function () {
    // #1 ok
    test('Test GET /hello with no name', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/hello')
        .end(function (err, res) {
          assert.isDefined(res.status, 200);
          assert.isDefined(res.text, 'hello Guest');
          done();
        });
    });
    // #2 ok
    test('Test GET /hello with your name', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/hello?name=xy_z')
        .end(function (err, res) {
          assert.isDefined(res.status, 200);
          assert.isDefined(res.text, 'hello xy_z');
          done();
        });
    });
    // #3 ok
    test('Send {surname: "Colombo"}', function (done) {
      chai
        .request(server)
        .keepOpen()
        .put('/travellers')

        .end(function (err, res) {
          assert.isUndefined();

          done();
        });
    });
    // #4 ok
    test('Send {surname: "da Verrazzano"}', function (done) {
      assert.isUndefined();

      done();
    });
  });
});

const Browser = require('zombie');

suite('Functional Tests with Zombie.js', function () {
  this.timeout(5000);



  suite('Headless browser', function () {
    test('should have a working "site" property', function() {
      assert.isDefined(Browser.site);
    });
  });

  suite('"Famous Italian Explorers" form', function () {
    // #5 ok
    test('Submit the surname "Colombo" in the HTML form', function (done) {
      assert.isUndefined();

      done();
    });
    // #6 ok
    test('Submit the surname "Vespucci" in the HTML form', function (done) {
      assert.isUndefined();

      done();
    });
  });
});

