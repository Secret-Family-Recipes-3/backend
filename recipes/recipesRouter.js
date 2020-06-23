const router = require('express').Router();

const Users = require('./recipesModels');

// === GETS === GETS === GETS === GETS === GETS === GETS === GETS
router.get('/', (req, res) => {
    Users.find()
    .then(recipes => {
        res.status(200).json({recipes})
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Recipes could not be retrieved', 
            error: error 
        });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Users.findById(id)
    .then(recipe => {
        res.status(200).json({recipe})
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Recipe could not be retrieved', 
            error: error 
        });
    });
});


// === PUTS === PUTS === PUTS === PUTS === PUTS === PUTS === PUTS
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    console.log(id);
    Users.updateRecipe(id, newData)
    .then(recipe => {
        res.status(200).json({recipe})
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Recipe data could not be updated', 
            error: error 
        });
    });
});

// === DELETE === DELETE === DELETE === DELETE === DELETE === DELETE
router.delete('/:id', (req,res) => {
    const { id } = req.params;

    Users.deleteRecipe(id)
    .then(deleted => {
      if (deleted) {
        res.json({ 
            removed: deleted 
        });
      } else {
        res.status(404).json({ 
            message: 'Could not find Recipe with given id' 
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete Recipe' });
    });
});

module.exports = router;