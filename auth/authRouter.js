const router = require('express').Router();
const bcrypt = require('bcryptjs');

const { generateToken, requiredProperty } = require('../middleware/middleware');
const { rounds } = require('../api/secrets.js');
const Users = require('../users/usersModels');

// REGISTER === REGISTER === REGISTER === REGISTER === REGISTER ===
router.get('/register', (req, res) => {
    res.json({ api: "'.get /register' brings you here. use a '.post' to register a new user" });
  });
  
router.post('/register',
    requiredProperty('username'),
    requiredProperty('email'),
    requiredProperty('password'),  
    (req, res) => {
    
        let user = req.body;
        const hash = bcrypt.hashSync(user.password, rounds);
        user.password = hash;

        Users.add(user)
            .then(saved => {
            // res.status(201).json(saved);
            if (saved) {
                const token = generateToken(user);
                res.status(201).json({ 
                message: `Welcome ${saved.name}!`,
                data: saved,
                token: token, 
                });
            } else {
                res.status(500).json({ 
                message: 'Error occurred during registration' ,
                error: error
                })
            }})
        .catch(error => {
            res.status(500).json({ 
                message: 'Server Error: Cannot add new user', 
                error: error 
            });
        });
    }
);
  
  
  // === LOGIN === LOGIN === LOGIN === LOGIN === LOGIN === LOGIN ===
  router.get('/login', (req, res) => {
    res.json({ api: "'.get /login' brings you here. use a '.post' to login a user" });
  });
  
  router.post(
        '/login',
        requiredProperty('username'),
        requiredProperty('password'),
        (req, res) => {
            let { username, password } = req.body;
  
            Users.findBy({ username })
                 .then(([user]) => {
                    if (user && bcrypt.compareSync(password, user.password)) {
                        const token = generateToken(user);
                        res.status(200).json({ 
                            message: `Welcome ${user.name}!`,
                            user: user,
                            token: token, 
                        });
                    } else {
                        res.status(401).json({ 
                            message: 'Invalid username or password' 
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                    res.status(500).json({ 
                        message: 'Error occurred during login',
                        error: error.message 
                    });
                });
        }
  );
  
  module.exports = router;