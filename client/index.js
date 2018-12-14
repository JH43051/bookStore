/* Root for mounting react components */

import App from './components/App';


ReactDOM.hydrate(
		<App initialData={window.__initialData__} />,  //JSX to render
		document.getElementById("root")
);