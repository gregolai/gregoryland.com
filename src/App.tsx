import { h, createContext, Component } from 'preact';
import { useContext } from 'preact/hooks';
import { Portfolio } from './Portfolio';
import { Resume } from './Resume';

const Context = createContext({
	printResume: () => {}
});

export class App extends Component {
	static useContext = () => useContext(Context);

	printResume = () => {
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

	render() {
		// SHOW RESUME WHEN IN IFRAME
		if (window.self !== window.top) {
			return <Resume />;
		}

		return (
			<Context.Provider
				value={{
					printResume: this.printResume
				}}
			>
				<Portfolio />
			</Context.Provider>
		);
	}
}