const router = require('express').Router();

const Users = require('./usersModels');

// === GETS === GETS === GETS === GETS === GETS === GETS === GETS
router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json({users})
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Users could not be retrieved', 
            error: error 
        });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Users.findById(id)
    .then(user => {
        res.status(200).json({user})
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'User could not be retrieved', 
            error: error 
        });
    });
});


// === PUTS === PUTS === PUTS === PUTS === PUTS === PUTS === PUTS
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    console.log(id);
    Users.updateUser(id, newData)
    .then(user => {
        res.status(200).json({user})
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'User data could not be updated', 
            error: error 
        });
    });
});

// === DELETE === DELETE === DELETE === DELETE === DELETE === DELETE
router.delete('/:id', (req,res) => {
    const { id } = req.params;

    Users.deleteUser(id)
    .then(deleted => {
      if (deleted) {
        res.json({ 
            removed: deleted 
        });
      } else {
        res.status(404).json({ 
            message: 'Could not find User with given id' 
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete User' });
    });
});

module.exports = router;