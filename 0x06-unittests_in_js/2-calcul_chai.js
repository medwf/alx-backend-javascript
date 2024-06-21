const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    return Math.round(b) !== 0 ? Math.round(a) / Math.round(b) : 'Error';
  }

  return 0;
};

module.exports = calculateNumber;
export default calculateNumber;
