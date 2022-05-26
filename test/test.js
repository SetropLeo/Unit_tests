const { add, subtract, multiply, divide } = require('../src/calculator');
const chai = require('chai');
const expect = chai.expect;

describe('Calculate', () => {
  describe('Addition', () => {
    it('Should sum two numbers', () => {
      expect(add(1, 2)).to.equal(3);
      expect(add(2, -2)).to.equal(0);
      expect(add(1, -2)).to.equal(-1);
    });
  });

  describe('Subtraction', () => {
    it('Should subtract two numbers', () => {
      expect(subtract(10, 8)).to.equal(2);
      expect(subtract(10, 10)).to.equal(0);
      expect(subtract(10, -10)).to.equal(20);
      expect(subtract(2, 3)).to.equal(-1);
    });
  });

  describe('Multiply', () => {
    it('Should multiply two numbers', () => {
      expect(multiply(4, 5)).to.equal(20);
      expect(multiply(4, 0)).to.equal(0);
      expect(multiply(-10, 3)).to.equal(-30);
    });
  });

  describe('Divide', () => {
    it('Should divide two numbers', () => {
      expect(divide(10, 2)).to.equal(5);
      expect(divide(0, 2)).to.equal(0);
      expect(divide(2, 0)).to.equal(undefined);
      expect(divide(2, -4)).to.equal(-0.5);
    });
  });
});
