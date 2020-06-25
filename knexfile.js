const pgConnection = process.env.DATABASE_URL;
const localDB = process.env.LOCAL_DATABASE_URL;
require('dotenv').config();

module.exports = {

  development: {
    client: "pg",
    connection: {
      localDB,
      database: 'sfr',
      user:     'postgres',
      password: 'PGadmin23'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { 
      directory: './database/seeds' 
    },
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: './database/db.db3'
    },
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
    pool: {
          min: 2,
          max: 10
        }
  },
};
