const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('a = 1, b = 3 should be 4', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('a = 1, b = 3.7 should be 5', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('a = 1.2, b = 3.7 should be 5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('a = 1.5, b = 3.7 should be 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
