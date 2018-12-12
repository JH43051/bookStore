/* Server-side rendering of webapp for SEO */

import React from 'react';
import App from '../client/components/App';
import ReactDOMServer from 'react-dom/server';

export default function() {
	//Outputs entire site as string
	return ReactDOMServer.renderToString(<App />);
};