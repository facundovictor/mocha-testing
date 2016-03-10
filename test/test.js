var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

describe('Array', function() {

  describe('#indexOf()', function () {

    it('This is just a pending test');

    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
