/* global describe, it */
var expect = require('chai').expect
var foo = 'bar'
var beverages = {
  tea: [ 'chai', 'matcha', 'oolong' ]
}

describe('hello-chai-expect', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      expect(foo).to.be.a('string')
      expect(foo).to.equal('bar')
      expect(foo).to.have.length(3)
      expect(beverages).to.have.property('tea').with.length(3)
    })
    it('should not equal bar2', function () {
      expect(foo).to.not.equal('bar2')
    })
  })
})
