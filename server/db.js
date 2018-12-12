/*Driver for translating between PostgreSQL (C) and Node (JS)*/

const pg = require('pg');

// create new pool instance
const pool = new pg.Pool({
	database: 'books-dev',
	username: 'SysOp',
	password: ''
});

// execute a query on the database
pool.query('SELECT * FROM books', [], function(err, result) {
	if (err) throw err;

	console.log(result.rows);
});
