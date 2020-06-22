
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          { id: 1, username: 'Tester', email: 'test1@email.com', password: 'test123' },
          { id: 2, username: 'Testy', email: 'test2@email.com', password: 'test123' },
          { id: 3, username: 'Testier', email: 'test3@email.com', password: 'test123' }
        ]);
      });
  };