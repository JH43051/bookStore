import React from 'react';
import BookItem from './BookItem';

const BookList = function(props) {
	return(
		<div>
			{props.books.map((book) => 
			<BookItem key={book.id}
				onClick={props.onTitleClick}
				onRatingClick={props.onBookClick}
				rating={props.calcRating(book.id)}
				{...book} />)
			}
		</div>
	);
};

export default BookList;