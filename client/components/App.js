/* Umbrella component */

import React from 'react';
import BookList from './BookList';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {answer: 42}
	}
	render() {
		return(<BookList />);
	}
}

export default App;  //Makes component available for import elsewhere