/**
 * itegration test suit for api.js
 */

const request = require('supertest');
const { expect } = require('chai'); // Import expect from Chai
const server = require('./api');

describe('Index page', () => {
  it('should return status code 200', async () => {
    const response = await request(server).get('/');
    expect(response.status).to.equal(200);
  });

  it('should return the message "Welcome to the payment system"', async () => {
    const response = await request(server).get('/');
    expect(response.text).to.equal('Welcome to the payment system'); // Use expect for assertions
  });
});

