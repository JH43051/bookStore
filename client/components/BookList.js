import React from 'react';
import Book from './Book';

const BookList = function(props) {
	return(
		<div>
			{props.books.map((book) => 
			<Book key={book.title} {...book} />)}
		</div>
	);
};

export default BookList;