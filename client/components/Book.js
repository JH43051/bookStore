import React from 'react';

const Book = function(props) {
	return(
		<div onClick={() => props.onClick(props.id)}>
			<div>{props.title}</div>
			<div>{props.author}</div>
			<div>{props.price}</div>
			<div>{props.rating}</div>
		</div>);
};

export default Book;