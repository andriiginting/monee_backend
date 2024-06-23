function getCurrencyType(currencyInNumber) {
  if (currencyInNumber == 1) return "JPY";
  else return "IDR";
};

module.exports = getCurrencyType;
