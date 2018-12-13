/* Umbrella component */

import React from 'react';
import BookList from './BookList';
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: []
		};
	}
	componentDidMount() {
		// ajax using axios
		axios.get('http://localhost:8080/api/books').then((resp) => {
				this.setState({ books: resp.data});
			});
	}
	render() {
		return(<BookList books={this.state.books} />);
	}
}

export default App;  //Makes component available for import elsewhere