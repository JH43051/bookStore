/* REST API for exposing database data using */

import express from 'express'; // add ExpressJS
const pg = require('pg');

// create new pool instance
const pool = new pg.Pool({
	database: 'books-dev',
	username: 'SysOp',
	password: ''
});

const router = express.Router();
 
router.get('/books', (req, res) => {
		pool.query('SELECT * FROM books', [], function(err, result) {
		if (err) throw err;

		res.send(result.rows);
	});
});

export default router;