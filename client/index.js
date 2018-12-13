/* Root for mounting react components */
import axios from 'axios';
import App from './components/App';

axios.get('http://localhost:8080/api/books').then((res) => {
	ReactDOM.hydrate(
		<App initialData={res.data} />,  //JSX to render
		document.getElementById('root')
	);
});
