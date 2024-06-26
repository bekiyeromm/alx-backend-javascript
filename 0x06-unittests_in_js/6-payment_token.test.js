/**
 * test suit for payment_token.getPaymentTokenFromAPI
 */
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should resolve with the correct response when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
  });
});
