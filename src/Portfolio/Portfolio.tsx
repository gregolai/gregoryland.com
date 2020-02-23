import { h, createContext, Component } from 'preact';
import { useContext } from 'preact/hooks';
import { Screens } from './Screens';
import { useScrollBreakpoints } from './useScrollBreakpoints';

interface ScreenOptions {
	id: string;
	element: HTMLDivElement;
}

const Context = createContext({
	registerScreen: (opts: ScreenOptions) => {},
	navigateToScreen: (screenId: string) => {}
});

const MyCustom = () => {
	const { opacity, scale, translate } = useScrollBreakpoints({
		init: {
			opacity: 0,
			scale: 1,
			translate: 0
		},
		breakpoints: [
			{
				from: 20,
				to: 500,
				get: ratio => ({
					scale: 1 + ratio * 0.4
				})
			},
			{
				from: 40,
				to: 200,
				get: ratio => ({
					translate: ratio * 200
				})
			},
			{
				from: 40,
				to: 160,
				get: ratio => ({
					opacity: 1 - Math.abs(1 - ratio * 2)
				})
			}
		]
	});

	const style = {
		opacity,
		transform: `translate(${translate}px, ${translate}px) scale(${scale}, ${scale})`
	};
	return <div style={style}>HELLO</div>;
};

export class Portfolio extends Component {
	static useContext = () => useContext(Context);

	_screens: { [screenId: string]: any } = [];

	registerScreen = ({ id, element }: ScreenOptions) => {
		this._screens[id] = element;
	};

	navigateToScreen = (screenId: string) => {
		const screen = this._screens[screenId];
		if (screen) {
			// TODO: Fade out
			(document.querySelector('#root') as HTMLDivElement).setAttribute('style', 'opacity:0;');

			window.location.hash = '#' + screenId;
			document.scrollingElement.scrollTo(0, screen.offsetTop);

			// TODO: Fade in
			(document.querySelector('#root') as HTMLDivElement).setAttribute('style', 'opacity:1;');
		}
	};

	render() {
		return (
			<Context.Provider
				value={{
					registerScreen: this.registerScreen,
					navigateToScreen: this.navigateToScreen
				}}
			>
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						zIndex: 2
					}}
				>
					<MyCustom />
				</div>
				<Screens />
			</Context.Provider>
		);
	}
}
