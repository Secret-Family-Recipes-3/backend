const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    updateUser,
    deleteUser
};

function find() {
    return db('users').select('id', 'username', 'email', 'password');
};

function findBy(filter) {
    return db('users').where(filter);
};

async function add(user) {
    const [id] = await db('users').insert(user, 'id');
    return findById(id);
};

function findById(id) {
    return db('users').where({ id }).first();
};

function updateUser(id, newData) {
    return findById( id ).update(newData);
};

function deleteUser(id) {
    return findById( id ).del();
}