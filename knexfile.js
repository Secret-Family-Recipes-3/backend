const pgConnection = process.env.DATABASE_URL
require('dotenv').config();

module.exports = {

  development: {
    // client: "sqlite3",
    // connection: {
    //   filename: './database/db.db3'
    // },
    client: "pg",
    connection: pgConnection,
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  testing: {
    // client: "sqlite3",
    // connection: {
    //   filename: './database/db.db3'
    // },
    client: "pg",
    connection: pgConnection,
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  staging: {
    client: "pg",
    connection: pgConnection,
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  }
};
