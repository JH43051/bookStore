/* Umbrella component */

import React from 'react';
import BookList from './BookList';
import Axios from 'axios';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			books: this.props.initialData,
			ratings: {}
		};
		this.fetchRatingForBook = this.fetchRatingForBook.bind(this);
		this.calcAvgRatingForBook = this.calcAvgRatingForBook.bind(this);
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

	render() {
		return(<BookList books={this.state.books} 
						 onBookClick={this.fetchRatingForBook}
						 calcRating={this.calcAvgRatingForBook}/>);
	}
}

export default App;  //Makes component available for import elsewhere