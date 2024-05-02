/**
 * test suite for sendPaymentRequestToAPi method.
 */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToAPi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const disp = sinon.spy(console);
    const testresult = sinon.stub(Utils, 'calculateNumber');

    testresult.returns(10);
    sendPaymentRequestToAPi(100, 20);
    expect(testresult.calledWith('SUM', 100, 20)).to.be.true;
    expect(testresult.callCount).to.be.equal(1);
    expect(disp.log.calledWith('The total is: 10')).to.be.true;
    expect(disp.log.callCount).to.be.equal(1);
    testresult.restore();
    disp.log.restore();
  });
});