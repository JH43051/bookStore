/* Umbrella component */

import React from 'react';
import BookList from './BookList';
import Axios from 'axios';
import Book from './Book';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			books: this.props.initialData,
			ratings: {},
			currentBookId: null
		};
		this.fetchRatingForBook = this.fetchRatingForBook.bind(this);
		this.calcAvgRatingForBook = this.calcAvgRatingForBook.bind(this);
		this.showBookPage = this.showBookPage.bind(this);
	}

	fetchRatingForBook(bookId) {
		if (this.state.ratings[bookId]) return;
		Axios.get(`http://localhost:8080/api/books/${bookId}/ratings`)
			.then((res) => this.setState( (prevState) => {
				const currentRatings = prevState.ratings;
				currentRatings[bookId] = res.data;
				return {ratings: currentRatings};
			}));
		}

	calcAvgRatingForBook(bookId) {
		var ratings = this.state.ratings[bookId];
		if (!ratings || ratings.length === 0) return null;
		return ratings.reduce((total, reviews) => {
				return total + reviews.rating
			}, 0) / ratings.length;
	}

	showBookPage(bookId) {
		history.pushState({currentBookId: bookId}, "", `/books/${bookId}`);
		this.setState({currentBookId: bookId});
	}

	render() {
		return (
			<div>
				{this.state.currentBookId ? 
				<Book {...this.state.books.find((item) => item.id === this.state.currentBookId)}/> :
				<BookList books={this.state.books} 
						onBookClick={this.fetchRatingForBook}
						calcRating={this.calcAvgRatingForBook}
						onTitleClick={this.showBookPage}
				/>}
			</div>
		);
	}
}

export default App;  //Makes component available for import elsewhere