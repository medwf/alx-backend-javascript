const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('floating point whole numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 2.0), 3);
    });

    it("rounding down b's floating point fractional number", () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 2.4), 3);
    });

    it("rounding down a and b's floating point fractional number", () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.4), 3);
    });

    it("rounding down a's floating point fractional number", () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.0), 3);
    });

    it("rounding up b's floating point fractional numbers", () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 2.5), 4);
    });

    it("rounding up a and b's floating point fractional numbers", () => {
      assert.strictEqual(calculateNumber('SUM', 2.6, 2.5), 6);
    });

    it("rounding up a's floating point fractional numbers", () => {
      assert.strictEqual(calculateNumber('SUM', 2.6, 2.0), 5);
    });

    it("rounding down a and b floating point fractional numbers with trailing 9's", () => {
      assert.strictEqual(calculateNumber('SUM', 2.499999, 3.499999), 5);
    });
  });
  describe('SUBTRACT', () => {
    it('floating point whole numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 2.0), -1);
    });

    it("rounding down b's floating point fractional number", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 2.4), -1);
    });

    it("rounding down a and b's floating point fractional number", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.4), -1);
    });

    it("rounding down a's floating point fractional number", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.0), -1);
    });

    it("rounding up b's floating point fractional numbers", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 2.5), -2);
    });

    it("rounding up a and b's floating point fractional numbers", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 2.5), 0);
    });

    it("rounding up a's floating point fractional numbers", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 2.0), 1);
    });

    it("rounding down a and b floating point fractional numbers with trailing 9's", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.499999, 3.499999), -1);
    });
  });
  describe('DIVIDE', () => {
    it('floating point whole numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.0, 2.0), 0.5);
    });

    it("rounding down b's floating point fractional number", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.0, 2.4), 0.5);
    });

    it("rounding down a and b's floating point fractional number", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.4), 0.5);
    });

    it("rounding down a's floating point fractional number", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.0), 0.5);
    });

    it("rounding up b's floating point fractional numbers", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.0, 2.5), 2);
    });

    it("rounding up a and b's floating point fractional numbers", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 2.5), 1);
    });

    it("rounding up a's floating point fractional numbers", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9.6, 2.0), 5);
    });

    it("rounding down a and b floating point fractional numbers with trailing 9's", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.499999, 3.499999), 2);
    });
    it('rounding down a and b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.499999, 0), 'Error');
    });
  });
  describe('Non Type', () => {
    it('Non type', () => {
      assert.strictEqual(calculateNumber('non type', 12, 11), 0);
    });
  });
});
