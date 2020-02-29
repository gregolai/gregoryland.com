import { h, createContext, Component, createRef, ComponentChildren } from 'preact';
import { useContext } from 'preact/hooks';
import { Screens } from './Screens';
import useScrollBreakpoints from './useScrollBreakpoints';
import { Tabs } from './Tabs';

const css = require('./Portfolio.scss');

interface NavigationProps {
	id: string;
	label: ComponentChildren;
}

const Context = createContext({
	registerScreen: (opts: NavigationProps) => {}
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

interface State {
	currentScreenId: string;
	// screens: NavigationProps[];
	// screensById: Mapped<NavigationProps>;
}

export default class Portfolio extends Component<{}, State> {
	static useContext = () => useContext(Context);

	_ref = createRef<HTMLDivElement>();

	state = {
		currentScreenId: ''
	};

	_screens: NavigationProps[] = [];
	_screensById: Mapped<NavigationProps> = {};

	registerScreen = (screen: NavigationProps) => {
		this._screens.push(screen);
		this._screensById[screen.id] = screen;
		this.forceUpdate();
	};

	setCurrentScreen = (screenId: string) => {
		const screen = this._screensById[screenId];
		if (screen && screenId !== this.state.currentScreenId) {
			const DURATION = 300;
			// TODO: Fade out
			this._ref.current.setAttribute('style', `transition-duration:${DURATION}ms;opacity:0;`);

			this.setState({ currentScreenId: screenId }, () => {
				setTimeout(() => {
					console.log('hash:', `#${screenId}`);
					window.location.hash = `#${screenId}`;
					//document.scrollingElement.scrollTo(0, screen.offsetTop);

					this._ref.current.setAttribute('style', `transition-duration:${DURATION}ms;opacity:1;`);
					setTimeout(() => {
						// done
					}, DURATION);
				}, DURATION);
			});
		}
	};

	render() {
		const { currentScreenId } = this.state;
		return (
			<Context.Provider
				value={{
					registerScreen: this.registerScreen
				}}
			>
				<div className={css.container} ref={this._ref}>
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
				</div>

				<Tabs
					style={{
						position: 'fixed',
						right: 50,
						top: 50
					}}
					onChange={this.setCurrentScreen}
					options={this._screens.map(({ label, id }) => ({
						label,
						value: id
					}))}
					value={currentScreenId}
				/>
			</Context.Provider>
		);
	}
}
