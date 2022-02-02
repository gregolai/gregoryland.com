import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BrowserStyleProvider } from 'pu2/style-lib';
import { App } from './App';

ReactDOM.hydrate(
	<StrictMode>
		<BrowserStyleProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</BrowserStyleProvider>
	</StrictMode>,
	document.getElementById('root')
);
