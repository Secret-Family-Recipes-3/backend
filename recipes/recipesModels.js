const db = require('../database/dbConfig');

module.exports = {
    addRecipe,
    find,
    findBy,
    findById,
    updateRecipe,
    deleteRecipe
};

function find() {
    return db('recipes').select('id', 'title', 'date_created', 'description');
};

function findBy(filter) {
    return db('recipes').where(filter);
};

async function addRecipe(recipe) {
    const [id] = await db('recipes').insert(recipe, 'id');
    return findById(id);
};

function findById(id) {
    return db('recipes').where({ id }).first();
};

function updateRecipe(id, newData) {
    return findById( id ).update(newData);
};

function deleteRecipe(id) {
    return findById( id ).del();
}