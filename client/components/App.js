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
	}

	fetchRatingForBook(bookId) {
		if (this.state.ratings[bookId]) return;
		Axios.get(`http://localhost:8080/api/books/${bookId}/ratings`)
			.then((res) => this.setState( (prevState) => {
				const currentRatings = prevState.ratings;
				currentRatings[bookId] = res.data;
				return {rating: currentRatings};
			}));
		}

	render() {
		return(<BookList books={this.state.books} 
						 onBookClick={this.fetchRatingForBook}/>);
	}
}

export default App;  //Makes component available for import elsewhere