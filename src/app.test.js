const app = require('./app');
const supertest = require('supertest');

const request = supertest(app);

describe('GET /add', () => {
  it('responds with json & result: 5', async (done) => {
    const response = await request.get('/add?value1=2&value2=3');

    const body = response.body;

    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(body.result).toBe(5);

    done();
  });
});

describe('GET /subtract', () => {
  it('responds with json & result: -2', async (done) => {
    const response = await request.get('/subtract?value1=5&value2=7');

    const body = response.body;

    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(body.result).toBe(-2);

    done();
  });
});
