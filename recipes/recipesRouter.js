const router = require('express').Router();

const Recipes = require('./recipesModels');

// === GETS === GETS === GETS === GETS === GETS === GETS === GETS
router.get('/', (req, res) => {
    Recipes.find()
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
    Recipes.findById(id)
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

// === POSTS === POSTS === POSTS === POSTS === POSTS === POSTS ===
router.post('/', (req, res) => {
    const newRecipe = req.body;
    Recipes.addRecipe(newRecipe)
      .then(saved => {
          res.status(201).json({ 
            message: 'Recipe Saved',
            data: saved,
          });
      })
      .catch(error => {
        res.status(500).json({ message: 'Server cannot add recipe', error });
      });
});


// === PUTS === PUTS === PUTS === PUTS === PUTS === PUTS === PUTS
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    console.log(id);
    Recipes.updateRecipe(id, newData)
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

    Recipes.deleteRecipe(id)
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