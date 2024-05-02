/**
 * test suite for 0-calculus.js.calculateNumber 
 */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber simple test suite', function() {
  describe('#Test with positive numbers', function() {
    it('should return 4', function() {
      assert.equal(calculateNumber(1, 3), 4);
    });
    it('should return 5', function() {
      assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('should return 5', function() {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it('should return 6', function() {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
    it('should return 11', function() {
      assert.equal(calculateNumber(8.6, 2.2), 11);
    });
    it('should return 10', function() {
      assert.equal(calculateNumber(5.2, 4.5), 10);
    });
  });
  describe('#Test with negative numbers', function() {
    it('should return -5', function() {
      assert.equal(calculateNumber(-1.6, -3), -5);
    });
    it('should return -6', function() {
      assert.equal(calculateNumber(-1.6, -3.6), -6);
    });
    it('should return -10', function() {
      assert.equal(calculateNumber(-5, -5.2), -10);
    });
    it('should return -6', function() {
      assert.equal(calculateNumber(-3.6, -1.6), -6);
    });
    it('should return -5', function() {
      assert.equal(calculateNumber(-1, -4.5), -5);
    });
  });
  describe('#Test with positive and negative numbers', function() {
    it('should return 2', function() {
      assert.equal(calculateNumber(-1, 3), 2);
    });
    it('should return 1', function() {
      assert.equal(calculateNumber(-1.6, 3), 1);
    });
    it('should return -5', function() {
      assert.equal(calculateNumber(-7.6, 3), -5);
    });
    it('should return 2', function() {
      assert.equal(calculateNumber(1, -3), -2);
    });
    it('should return -1', function() {
      assert.equal(calculateNumber(-5.5, 3.5), -1);
    });
  });
});
