/* Root for mounting react components */

import App from './components/App';

window.onload = function() {

ReactDOM.render(
	<App />,  //JSX to render
	document.getElementById('root')
);

};