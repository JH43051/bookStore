/* Server-side rendering of webapp for SEO */

import React from 'react';
import App from '../client/components/App';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

const getData = function(bookId, resData) {
	if(bookId) {
		return {
			books: [resData],
			currentBookId: bookId
		};
	} else {
		return resData;
	}
};

const getUrl = function(bookId) {
	if(bookId) {
		return `http://localhost:8080/api/books/${bookId}`;
	} else {
		return 'http://localhost:8080/api/books/';
	}
};

export default function() {
	return axios.get(getUrl(bookId)).then((res) => {
		//Outputs entire site as string
		const data = getData(bookId, res.data)
		return { 
			markup: ReactDOMServer.renderToString(
					<App initialData={data} />),
			data: data
		}
	});
};