// const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/sfr";
require('dotenv').config();

module.exports = {

  development: {
    client: 'sqlite3',
    connection: { 
      filename: './database/db.db3' 
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { 
      directory: './database/seeds' 
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

  // development: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: './database/db.db3'
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: "./database/migrations",
  //   },
  //   seeds: {
  //     directory: "./database/seeds",
  //   },
  // },

  // testing: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: './database/db.db3'
  //   },
  //   // client: "pg",
  //   // connection: pgConnection,
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: "./database/migrations",
  //   },
  //   seeds: {
  //     directory: "./database/seeds",
  //   },
  // },

  // staging: {
  //   client: "pg",
  //   connection: pgConnection,
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: "./database/migrations",
  //   },
  //   seeds: {
  //     directory: "./database/seeds",
  //   },
  // },

  // production: {
  //   client: "pg",
  //   connection: pgConnection,
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: "./database/migrations",
  //   },
  //   seeds: {
  //     directory: "./database/seeds",
  //   },
  // }
};
