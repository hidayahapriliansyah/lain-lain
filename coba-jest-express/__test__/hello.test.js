const request = require('supertest');
const app = require('../src/app');

describe('GET /hello', () => {
  test('should contain message test success', async () => {
    const response = await request(app).get('/hello');

    expect(response.status).toBe(200);
  });
});