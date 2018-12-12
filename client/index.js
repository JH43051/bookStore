/* Root for mounting react components */

import App from './components/App.js';

window.onload = function() {

ReactDOM.render(
	<App />,  //JSX to render
	document.getElementById('root')
);

};