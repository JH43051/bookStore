import React from 'react';

const Book = function(props) {
	return(
		<div>
			<h2>Book Page</h2>
			<div>{props.title}</div>
			<div>{props.author}</div>
			<div>{props.price}</div>
			<div>{props.rating}</div>
		</div>);
};

export default Book;