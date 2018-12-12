/* Umbrella component */

import BookList from './BookList.js';

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