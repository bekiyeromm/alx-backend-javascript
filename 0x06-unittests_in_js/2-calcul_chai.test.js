/**
 * test suite for 2-calculus.js.calculateNumber using chai
 */
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber simple test suite using chai', function() {
  describe('#Test sum of number', function() {
    it('should return the subtraction of its rounded arguments', function() {
      expect(calculateNumber('SUM',1, 3)).to.equal(4);
      expect(calculateNumber('SUM',1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM',1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM',1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM',8.6, 2.2)).to.equal(11);
      expect(calculateNumber('SUM',5.2, 4.5)).to.equal(10);
  });
});
  describe('#Test SUM with negative numbers using chai', function() {
      it("should return the sum of negative numbers", function() {
      expect(calculateNumber('SUM',-1.6, -3)).to.equal(-5);
      expect(calculateNumber('SUM',-1.6, -3.6)).to.equal(-6);
      expect(calculateNumber('SUM',-5, -5.2)).to.equal(-10);
      expect(calculateNumber('SUM',-3.6, -1.6)).to.equal(-6);
      expect(calculateNumber('SUM', -1, -4.5)).to.equal(-5);
      });
  });
  describe('#Test SUM with positive and negative numbers using chai', function() {
      it("should return the sum of positive an dnegative numbers", function() {
      expect(calculateNumber('SUM', -1, 3)).to.equal(2);
      expect(calculateNumber('SUM',-1.6, 3)).to.equal(1);
      expect(calculateNumber('SUM',-7.6, 3)).to.equal(-5);
      expect(calculateNumber('SUM',1, -3)).to.equal(-2);
      expect(calculateNumber('SUM',-5.5, 3.5)).to.equal(-1);
      });
  });

  describe('#Test SUBTRACT with positive numbers using chai', function() {
      it("should return result of subtraction of positive numbers", function() {
      expect(calculateNumber('SUBTRACT',1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT',1, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT',1.2, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT',1.5, 3.7)).to.equal(-2);
      expect(calculateNumber('SUBTRACT',8.6, 2.2)).to.equal(7);
      expect(calculateNumber('SUBTRACT',5.2, 4.5)).to.equal(0);
      });
  });
  describe('#Test SUBTRACT with negative numbers using chai', function() {
      it("should return the result of subtraction of negative numbers", function() {
      expect(calculateNumber('SUBTRACT',-1.6, -3)).to.equal(1);
      expect(calculateNumber('SUBTRACT',-1.6, -3.6)).to.equal(2);
      expect(calculateNumber('SUBTRACT',-5, -5.2)).to.equal(0);
      expect(calculateNumber('SUBTRACT',-3.6, -1.6)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', -1, -4.5)).to.equal(3);
      })
  });
  describe('#Test SUBTRACT with positive and negative numbers using chai', function() {
      it("should return the result subtraction of +ve and -ve numbers", function() {
      expect(calculateNumber('SUBTRACT', -1, 3)).to.equal(-4);
      expect(calculateNumber('SUBTRACT',-1.6, 3)).to.equal(-5);
      expect(calculateNumber('SUBTRACT',-7.6, 3)).to.equal(-11);
      expect(calculateNumber('SUBTRACT',1, -3)).to.equal(4);
      expect(calculateNumber('SUBTRACT',-5.6, 3.2)).to.equal(-9);
      });
  });

  describe('#Test DIVIDE with positive, negative and 0 numbers using chai', function() {
      it("should return the result of division of two numbers", function() {
      expect(calculateNumber('DIVIDE',1, -2)).to.equal(-0.5);
      expect(calculateNumber('DIVIDE',1, 3.7)).to.equal(0.25);
      expect(calculateNumber('DIVIDE',10, 2)).to.equal(5);
      expect(calculateNumber('DIVIDE',1, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE',8.6, 2.2)).to.equal(4.5);
      expect(calculateNumber('DIVIDE',5.2, 5)).to.equal(1);
      expect(calculateNumber('DIVIDE',-10, -2)).to.equal(5);
      expect(calculateNumber('DIVIDE',10, -2)).to.equal(-5);
      })
  });
});
