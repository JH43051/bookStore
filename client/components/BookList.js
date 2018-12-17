import React from 'react';
import Book from './Book';

const BookList = function(props) {
	return(
		<div>
			{props.books.map((book) => 
			<Book key={book.id}
				  onClick={props.onBookClick}
				  rating={props.calcRating(book.id)}
				  {...book} />)}
		</div>
	);
};

export default BookList;