require('dotenv').config();
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[environment]

module.exports = {

  development: {
    client: 'pg',
    connection: {
      localhost: 3000,
      database: 'denswaccd'
    }
  },

    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL + '?ssl=true'
    },
  };
