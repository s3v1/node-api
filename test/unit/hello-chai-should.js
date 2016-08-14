/* global describe, it */
require('chai').should() // actually call the function
var foo = 'bar'
var beverages = {
  tea: [ 'chai', 'matcha', 'oolong' ]
}

describe('hello-chai-should', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      foo.should.be.a('string')
      foo.should.equal('bar')
      foo.should.have.length(3)
      beverages.should.have.property('tea').with.length(3)
    })
  })
})
