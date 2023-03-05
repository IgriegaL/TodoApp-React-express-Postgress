const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user:process.env.USERNAME,
    password:'1234',
    host: process.env.HOST,
    port: process.env.DBPORT,
    database:'todoapp'
})
module.exports = pool