import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('floating point whole numbers', () => {
      expect(calculateNumber('SUM', 1.0, 2.0)).to.equal(3);
    });

    it("rounding down b's floating point fractional number", () => {
      expect(calculateNumber('SUM', 1.0, 2.4)).to.equal(3);
    });

    it("rounding down a and b's floating point fractional number", () => {
      expect(calculateNumber('SUM', 1.4, 2.4)).to.equal(3);
    });

    it("rounding down a's floating point fractional number", () => {
      expect(calculateNumber('SUM', 1.4, 2.0)).to.equal(3);
    });

    it("rounding up b's floating point fractional numbers", () => {
      expect(calculateNumber('SUM', 1.0, 2.5)).to.equal(4);
    });

    it("rounding up a and b's floating point fractional numbers", () => {
      expect(calculateNumber('SUM', 2.6, 2.5)).to.equal(6);
    });

    it("rounding up a's floating point fractional numbers", () => {
      expect(calculateNumber('SUM', 2.6, 2.0)).to.equal(5);
    });

    it("rounding down a and b floating point fractional numbers with trailing 9's", () => {
      expect(calculateNumber('SUM', 2.499999, 3.499999)).to.equal(5);
    });
  });
  describe('SUBTRACT', () => {
    it('floating point whole numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.0, 2.0)).to.equal(-1);
    });

    it("rounding down b's floating point fractional number", () => {
      expect(calculateNumber('SUBTRACT', 1.0, 2.4)).to.equal(-1);
    });

    it("rounding down a and b's floating point fractional number", () => {
      expect(calculateNumber('SUBTRACT', 1.4, 2.4)).to.equal(-1);
    });

    it("rounding down a's floating point fractional number", () => {
      expect(calculateNumber('SUBTRACT', 1.4, 2.0)).to.equal(-1);
    });

    it("rounding up b's floating point fractional numbers", () => {
      expect(calculateNumber('SUBTRACT', 1.0, 2.5)).to.equal(-2);
    });

    it("rounding up a and b's floating point fractional numbers", () => {
      expect(calculateNumber('SUBTRACT', 2.6, 2.5)).to.equal(0);
    });

    it("rounding up a's floating point fractional numbers", () => {
      expect(calculateNumber('SUBTRACT', 2.6, 2.0)).to.equal(1);
    });

    it("rounding down a and b floating point fractional numbers with trailing 9's", () => {
      expect(calculateNumber('SUBTRACT', 2.499999, 3.499999)).to.equal(-1);
    });
  });
  describe('DIVIDE', () => {
    it('floating point whole numbers', () => {
      expect(calculateNumber('DIVIDE', 1.0, 2.0)).to.equal(0.5);
    });

    it("rounding down b's floating point fractional number", () => {
      expect(calculateNumber('DIVIDE', 1.0, 2.4)).to.equal(0.5);
    });

    it("rounding down a and b's floating point fractional number", () => {
      expect(calculateNumber('DIVIDE', 1.4, 2.4)).to.equal(0.5);
    });

    it("rounding down a's floating point fractional number", () => {
      expect(calculateNumber('DIVIDE', 1.4, 2.0)).to.equal(0.5);
    });

    it("rounding up b's floating point fractional numbers", () => {
      expect(calculateNumber('DIVIDE', 6.0, 2.5)).to.equal(2);
    });

    it("rounding up a and b's floating point fractional numbers", () => {
      expect(calculateNumber('DIVIDE', 2.6, 2.5)).to.equal(1);
    });

    it("rounding up a's floating point fractional numbers", () => {
      expect(calculateNumber('DIVIDE', 9.6, 2.0)).to.equal(5);
    });

    it("rounding down a and b floating point fractional numbers with trailing 9's", () => {
      expect(calculateNumber('DIVIDE', 6.499999, 3.499999)).to.equal(2);
    });
    it('rounding down a and b is 0', () => {
      expect(calculateNumber('DIVIDE', 6.499999, 0)).to.equal('Error');
    });
  });
  describe('Non Type', () => {
    it('Non type', () => {
      expect(calculateNumber('non type', 12, 11)).to.equal(0);
    });
  });
});
