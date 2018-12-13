import React from 'react';

const Book = function(props) {
	return(
		<div>
			<div>{props.title}</div>
			<div>{props.author}</div>
			<div>{props.price}</div>
		</div>);
};

export default Book;