import React, { useContext, createContext, Component } from 'react';
import DocumentScrollProvider from './utils/DocumentScrollProvider';
import WindowInnerDimensionsProvider from './utils/WindowInnerDimensionsProvider';
import Portfolio from './Portfolio';
import Resume from './Resume';

const Context = createContext({
	printResume: () => {}
});

const printResume = () => {
	const iframe = document.createElement('iframe');
	iframe.src = window.location.href;
	iframe.style.position = 'absolute';
	iframe.style.top = '-10000px';
	document.body.appendChild(iframe);

	const { contentWindow } = iframe;
	contentWindow.addEventListener('DOMContentLoaded', () => {
		contentWindow.print();

		setTimeout(() => {
			document.body.removeChild(iframe);
		}, 2000);
	});
};

const App = () => {
	// SHOW RESUME WHEN IN IFRAME
	if (window.self !== window.top) {
		return <Resume />;
	}

	return (
		<DocumentScrollProvider>
			<WindowInnerDimensionsProvider>
				<Context.Provider
					value={{
						printResume
					}}
				>
					<Portfolio />
				</Context.Provider>
			</WindowInnerDimensionsProvider>
		</DocumentScrollProvider>
	);
};

export const useApp = () => useContext(Context);

export default App;
