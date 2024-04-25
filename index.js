const betterModulo = (dividend, divisor) => {
  if (divisor === 0) return NaN;
  return dividend & (divisor - 1);
}

module.exports = betterModulo;
