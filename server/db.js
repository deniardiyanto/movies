const Pool = require('pg').Pool;
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'movies',
password: 'Password1',
port: 5432
})
module.exports = pool;