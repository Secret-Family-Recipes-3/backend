const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
     await db.seed.run()
});

const newUser = {
     username: 'Tester77',
     password: 'password77',
     email: 'tester77@test.com'
};

const user = {
     username: 'Tester',
     email: 'test1@email.com',
     password: 'test123'
};

// === REGISTRATION === REGISTRATION === REGISTRATION === REGISTRATION === REGISTRATION === REGISTRATION ===
describe('authRouter', () => {
     describe('registering new user', () => {
          it('should return new user object', async () => {
               return supertest(server)
                    .post('/api/auth/register')
                    .send(newUser)
                         .then(res => {
                              //check for token
                              expect(res.body.token).toBeTruthy()
                              //check for username
                              expect(res.body.newUser.username).toBe('Tester77')
                         });
          });

          it('should return a 201 status', async () => {
               return supertest(server)
                    .post('/api/auth/register')
                    .send(newUser)
                         .then(res => {
                              expect(res.status).toBe(201)
                         });
          });

     });
});