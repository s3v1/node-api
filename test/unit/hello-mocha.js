/* global describe, it */
var assert = require('assert')

describe('hello-mocha', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(5))
      assert.equal(-1, [1, 2, 3].indexOf(0))
    })
    it('should return the array location when a number is found', function () {
      assert.equal(2, [1, 2, 12].indexOf(12))
    })
  })
})
