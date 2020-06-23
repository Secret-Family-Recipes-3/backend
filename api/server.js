const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../users/usersRouter');
const authRouter = require('../auth/authRouter');
const recipesRouter = require('../recipes/recipesRouter')
const { authenticate } = require('../middleware/middleware');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.use('/api', authRouter);
server.use('/api/users', authenticate, usersRouter);
server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
     res.status(200).json({ server: 'Up and Running' });
});

module.exports = server;