export const getCleanCurrencies = (currencies, currentCurrency) =>
  currencies.filter(currency => currency !== currentCurrency);
