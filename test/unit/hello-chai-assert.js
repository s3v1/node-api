/* global describe, it */
var assert = require('chai').assert
var foo = 'bar'
var beverages = {
  tea: ['chai', 'matcha', 'oolong']
}

describe('hello-chai-assert', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.typeOf(foo, 'string') // without optional message
      assert.typeOf(foo, 'string', 'foo is a string') // with optional message
      assert.equal(foo, 'bar', 'foo equal `bar`')
      assert.lengthOf(foo, 3, 'foo`s value has a length of 3')
      assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea')
    })
    it('should equal bar', function () {
      assert.equal(foo, 'bar', 'foo equal `bar`')
    })
  })
})
