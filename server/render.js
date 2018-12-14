/* Server-side rendering of webapp for SEO */

import React from 'react';
import App from '../client/components/App';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

export default function() {
	return axios.get('http://localhost:8080/api/books').then((res) => {
		//Outputs entire site as string
		return { 
			markup: ReactDOMServer.renderToString(
					<App initialData={res.data} />),
			data: res.data
		}
	});
};