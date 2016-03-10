var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");


function add() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

describe('Array', function() {

  describe('#indexOf()', function () {

    it('This is just a pending test');

    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});


// Dinamically Generating Tests
describe('add()', function() {
  var tests = [
  {args: [1, 2],       expected: 3},
  {args: [1, 2, 3],    expected: 6},
  {args: [1, 2, 3, 4], expected: 10}
  ];

  this.slow(10);

  tests.forEach(function(test) {
    it('correctly adds ' + test.args.length + ' args', function() {
      var res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});


describe('a suite of tests', function() {
  this.timeout(500);

  it('should take less than 500ms', function(done){
    setTimeout(done, 300);
  });

  it('should take less than 500ms as well', function(done){
    setTimeout(done, 200);
  });
})
