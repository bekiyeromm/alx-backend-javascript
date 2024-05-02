const Utils = require('./utils');
/**
 * 
 * calculate total coast
 * @param {number} totalAmount -total cost
 * @param {number} totalShipping -total shiping coast
 */

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
};

module.exports = sendPaymentRequestToApi;