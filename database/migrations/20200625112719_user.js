
exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
        users.increments();
        users.string('username', 255).notNullable().unique();
        users.string('email', 255).notNullable().unique();
        users.string('password', 255).notNullable();
    })

    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('title').notNullable();
        tbl.string('description');
        tbl.date('date_created');
        tbl.integer('users_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('RESTRICT');
    
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('recipes');
};
