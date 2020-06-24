const router = require('express').Router();
const bcrypt = require('bcryptjs');

const { generateToken } = require('../middleware/middleware');
const Users = require('../users/usersModels');

// REGISTER === REGISTER === REGISTER === REGISTER === REGISTER ===
router.get('/register', (req, res) => {
    res.json({ api: "'.get /register' brings you here. use a '.post' to register a new user" });
  });
  
  router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    Users.add(user)
      .then(saved => {
        // res.status(201).json(saved);
        if (saved) {
          const token = generateToken(user);
          res.status(201).json({ 
            message: `Successful Registration, Welcome ${user.username}!`,
            data: saved,
            token: token, 
          });
        } else {
          res.status(401).json({ 
            message: 'You shall not pass! (Sign-up)' 
          })
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'Server Error occurred during registering', error });
      });
});
  
  
  // === LOGIN === LOGIN === LOGIN === LOGIN === LOGIN === LOGIN ===
  router.get('/login', (req, res) => {
    res.json({ api: "'.get /login' brings you here. use a '.post' to login a user" });
  });
  
  router.post('/login', (req, res) => {
            let { username, password } = req.body;
  
            Users.findBy({ username })
                 .then(([user]) => {
                    if (user && bcrypt.compareSync(password, user.password)) {
                        const token = generateToken(user);
                        res.status(200).json({ 
                            message: `Welcome ${user.username}!`,
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
                        message: 'Server Error occurred during login',
                        error: error.message 
                    });
                });
        }
  );
  
  module.exports = router;