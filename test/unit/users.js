var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var jsf = require('json-schema-faker');


describe('Users', function() {

  describe('Creation', function () {

    context('When creating a new user', function() {
      it('Should have an id', function() {
        some_guy = new mocks.user();
      });
    });
  });
});


