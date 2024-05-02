/**
 * test suite for 1-calculus.js.calculateNumber 
 */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber simple test suite', function() {
  describe('#Test SUM with positive numbers', function() {
    it('should return 4', function() {
      assert.equal(calculateNumber('SUM',1, 3), 4);
    });
    it('should return 5', function() {
      assert.equal(calculateNumber('SUM',1, 3.7), 5);
    });
    it('should return 5', function() {
      assert.equal(calculateNumber('SUM',1.2, 3.7), 5);
    });
    it('should return 6', function() {
      assert.equal(calculateNumber('SUM',1.5, 3.7), 6);
    });
    it('should return 11', function() {
      assert.equal(calculateNumber('SUM',8.6, 2.2), 11);
    });
    it('should return 10', function() {
      assert.equal(calculateNumber('SUM',5.2, 4.5), 10);
    });
  });
  describe('#Test SUM with negative numbers', function() {
    it('should return -5', function() {
      assert.equal(calculateNumber('SUM',-1.6, -3), -5);
    });
    it('should return -6', function() {
      assert.equal(calculateNumber('SUM',-1.6, -3.6), -6);
    });
    it('should return -10', function() {
      assert.equal(calculateNumber('SUM',-5, -5.2), -10);
    });
    it('should return -6', function() {
      assert.equal(calculateNumber('SUM',-3.6, -1.6), -6);
    });
    it('should return -5', function() {
      assert.equal(calculateNumber('SUM', -1, -4.5), -5);
    });
  });
  describe('#Test SUM with positive and negative numbers', function() {
    it('should return 2', function() {
      assert.equal(calculateNumber('SUM', -1, 3), 2);
    });
    it('should return 1', function() {
      assert.equal(calculateNumber('SUM',-1.6, 3), 1);
    });
    it('should return -5', function() {
      assert.equal(calculateNumber('SUM',-7.6, 3), -5);
    });
    it('should return 2', function() {
      assert.equal(calculateNumber('SUM',1, -3), -2);
    });
    it('should return -1', function() {
      assert.equal(calculateNumber('SUM',-5.5, 3.5), -1);
    });
  });

  describe('#Test SUBTRACT with positive numbers', function() {
    it('should return -2', function() {
      assert.equal(calculateNumber('SUBTRACT',1, 3), -2);
    });
    it('should return -3', function() {
      assert.equal(calculateNumber('SUBTRACT',1, 3.7), -3);
    });
    it('should return -3', function() {
      assert.equal(calculateNumber('SUBTRACT',1.2, 3.7), -3);
    });
    it('should return -2', function() {
      assert.equal(calculateNumber('SUBTRACT',1.5, 3.7), -2);
    });
    it('should return 7', function() {
      assert.equal(calculateNumber('SUBTRACT',8.6, 2.2), 7);
    });
    it('should return 0', function() {
      assert.equal(calculateNumber('SUBTRACT',5.2, 4.5), 0);
    });
  });
  describe('#Test SUBTRACT with negative numbers', function() {
    it('should return 1', function() {
      assert.equal(calculateNumber('SUBTRACT',-1.6, -3), 1);
    });
    it('should return 2', function() {
      assert.equal(calculateNumber('SUBTRACT',-1.6, -3.6), 2);
    });
    it('should return 0', function() {
      assert.equal(calculateNumber('SUBTRACT',-5, -5.2), 0);
    });
    it('should return -2', function() {
      assert.equal(calculateNumber('SUBTRACT',-3.6, -1.6), -2);
    });
    it('should return 3', function() {
      assert.equal(calculateNumber('SUBTRACT', -1, -4.5), 3);
    });
  });
  describe('#Test SUBTRACT with positive and negative numbers', function() {
    it('should return 4', function() {
      assert.equal(calculateNumber('SUBTRACT', -1, 3), -4);
    });
    it('should return -5', function() {
      assert.equal(calculateNumber('SUBTRACT',-1.6, 3), -5);
    });
    it('should return -11', function() {
      assert.equal(calculateNumber('SUBTRACT',-7.6, 3), -11);
    });
    it('should return 4', function() {
      assert.equal(calculateNumber('SUBTRACT',1, -3), 4);
    });
    it('should return -9', function() {
      assert.equal(calculateNumber('SUBTRACT',-5.6, 3.2), -9);
    });
  });

  describe('#Test DIVIDE with positive, negative and 0 numbers', function() {
    it('should return -0.5', function() {
      assert.equal(calculateNumber('DIVIDE',1, -2), -0.5);
    });
    it('should return 0.25', function() {
      assert.equal(calculateNumber('DIVIDE',1, 3.7), 0.25);
    });
    it('should return 5', function() {
      assert.equal(calculateNumber('DIVIDE',10, 2), 5);
    });
    it('should return Error', function() {
      assert.equal(calculateNumber('DIVIDE',1, 0), 'Error');
    });
    it('should return 4.5', function() {
      assert.equal(calculateNumber('DIVIDE',8.6, 2.2), 4.5);
    });
    it('should return 0', function() {
      assert.equal(calculateNumber('DIVIDE',5.2, 5), 1);
    });
    it('should return 5', function() {
      assert.equal(calculateNumber('DIVIDE',-10, -2), 5);
    });
    it('should return -5', function() {
      assert.equal(calculateNumber('DIVIDE',10, -2), -5);
    });
  });

});
