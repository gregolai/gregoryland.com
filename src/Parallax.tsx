import { h, createContext, Component } from 'preact';
import { useContext, useRef } from 'preact/hooks';

const Context = createContext(null);

const nextId = (() => {
	let id = 0;
	return () => ++id;
})();
const percentMoved = (a, totalDist, size, scroll) => {
	// adjust cached value
	const ax = a - scroll;

	// Percent the element has moved based on current and total distance to move
	const percent = ((ax * -1 + size) / totalDist) * 100;

	return percent;
};
const scaleBetween = (value, newMin, newMax, oldMin, oldMax) => {
	return ((newMax - newMin) * (value - oldMin)) / (oldMax - oldMin) + newMin;
};
const getParallaxOffsets = ({ y0, y1, x0, x1 }, percentMoved) => {
	const yUnit = y1.unit;
	const xUnit = x1.unit;

	const x = scaleBetween(percentMoved, x0.value, x1.value, 0, 100);
	const y = scaleBetween(percentMoved, y0.value, y1.value, 0, 100);

	return {
		x: {
			value: x,
			unit: xUnit
		},
		y: {
			value: y,
			unit: yUnit
		}
	};
};

// const SCROLL_OPTIONS = {
// 	capture: false,
// 	passive: true
// };
// class Parallax extends Component {
// 	_ticking = false;

// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			scrollTop: 0,
// 			width: 0,
// 			height: 0
// 		};
// 	}

// 	componentDidUpdate(prevProps, prevState) {}

// 	componentDidMount() {
// 		document.addEventListener('scroll', this._onScroll, SCROLL_OPTIONS);
// 		window.addEventListener('resize', this._onResize, false);
// 	}

// 	componentWillUnmount() {
// 		document.removeEventListener('scroll', this._onScroll, SCROLL_OPTIONS);
// 		window.removeEventListener('resize', this._onResize, false);
// 	}

// 	_onScroll = () => {
// 		this.setState({
// 			scrollTop: document.scrollingElement.scrollTop
// 		});
// 	};

// 	_onResize = () => {
// 		this.setState({
// 			width: window.innerWidth,
// 			height: window.innerHeight
// 		});
// 	};

// 	_getElementPosition() {

// 	}

// 	render() {
// 		const { children } = this.props;
// 		return <Context.Provider value={this.state}>{children}</Context.Provider>;
// 	}
// }

// const ParallaxElement = ({ children }) => {
// 	const ref = useRef(null);
// 	const { getPosition } = useContext(Context);

// 	getPosition(ref.current)

// 	return (
// 		<div ref={ref}>{children}</div>
// 	)
// }
