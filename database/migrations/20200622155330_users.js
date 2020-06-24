
exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
        users.increments();
    
        users
            .string('username', 255)
            .notNullable()
            .unique();
        users
            .string('email', 255)
            .notNullable()
            .unique();
        users
            .string('password', 255)
            .notNullable();
      })

      .createTable('recipes', recipes => {
       recipes.increments();
       recipes.date('date_created')
          .notNullable()
          .unique();
       recipes
          .integer('users_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');
       recipes
          .string('title')
          .notNullable();
       recipes
          .string('description')
          .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
};
