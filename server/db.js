/*Driver for translating between PostgreSQL (C) and Node (JS)*/

var pg = require('pg');

// create new pool instance
var pool = new pg.Pool({
	database: 'books-dev',
	username: 'SysOp',
	password: ''
});

// connect to the database
pool.connect(function(err, client, done) {
	if (err) throw err;

	// execute a query on the database
	pool.query('SELECT * FROM books', [], function(err, result) {
		if (err) throw err;

		console.log(result.rows);
	});
});