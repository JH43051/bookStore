import React from 'react';
import Book from './Book';

const BookList = function(props) {
	return(
		<div>
			<Book />
			<Book />
			<Book />
		</div>
	);
};

export default BookList;