// Update with your config settings.
// const env = require('dotenv').config()
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