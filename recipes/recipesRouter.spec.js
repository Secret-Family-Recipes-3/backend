const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');
const constants = require('../api/secrets');
const jwt = require('jsonwebtoken');

function createToken(user){
     const payload = {
       subject: user.id,
       username: user.username
     };

     const secret = constants.jwtSecret
     const options = {
       expiresIn: '1d',
     };

     return jwt.sign(payload, secret, options)
};

const User = {
     username: 'Tester',
     password: 'test123'
};

beforeEach(async () => {
     await db.seed.run()
});

afterEach(async () => {
     await db('recipes').truncate()
});

describe('recipesRouter', () => {
     let testToken = createToken(User)
     describe('fetching recipes list', () => {
          it('should return a 200 status', async () => {
               return supertest(server)
                    .get('/api/recipes')
                    .set('Authorization', testToken)
                         .then(res => {
                              expect(res.status).toBe(200)
                         });
          });

          it('should return an array of 3 recipes (seeds)', async () => {
               return supertest(server)
                    .get('/api/recipes')
                    .set('Authorization', testToken)
                         .then(res => {
                              expect(res.body.recipes).toHaveLength(3)
                         });
          });
     });

     describe('fetching single recipe', () => {
          it('should return a 200 status', async () => {
               return supertest(server)
                    .get('/api/recipes/1')
                    .set('Authorization', testToken)
                         .then(res => {
                              expect(res.status).toBe(200)
                         });
          });

          it('should return an object with a single recipe', () => {
               return supertest(server)
                    .get('/api/recipes/1')
                    .set('Authorization', testToken)
                         .then(res => {
                              expect(res.body.recipe).toBeTruthy()
                         });
          });
     });
});
