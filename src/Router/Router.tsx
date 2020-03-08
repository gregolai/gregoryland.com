import React, { Component, createContext, useContext, useEffect, useState } from 'react';
import RouterContext from './RouterContext';
import Link from './Link';

interface Props {
	children: React.ReactChild;
}

const update = prevState => {
	const route = window.location.pathname; // route

	return {
		...prevState,
		currentRoute: route
	};
};

export default class Router extends Component<Props, {}> {
	static Link = Link;

	static useContext = () => useContext(RouterContext);

	static getDerivedStateFromProps(nextProps, prevState) {
		// 		ancestorOrigins: DOMStringList {length: 0}
		// origin: "http://localhost:8086"
		// protocol: "http:"
		// host: "localhost:8086"
		// hostname: "localhost"
		// port: "8086"
		// pathname: "/third"
		// search: ""
		// hash: ""
		// href: "http://localhost:8086/third"

		const nextState = update(prevState);
		console.log('getDerivedStateFromProps', nextState);
		return nextState;
	}

	state = {
		currentRoute: '',
		routes: {},
		transitioning: false
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.currentRoute !== this.state.currentRoute) {
			const el = this.state.routes[this.state.currentRoute];
			if (el) {
				document.scrollingElement.scrollTo(0, el.offsetTop);
			}
		}
	}

	componentDidMount() {
		this.setState(update(this.state));

		window.addEventListener(
			'popstate',
			e => {
				e.preventDefault();
				console.log('popstate', { e, 'window.location': window.location });
				this.setState(update(this.state));
			},
			false
		);
		window.addEventListener(
			'pushstate',
			e => {
				e.preventDefault();
				console.log('pushstate', { e, 'window.location': window.location });
				this.setState(update(this.state));
			},
			false
		);
	}

	goToHref = (href: string) => {
		window.history.pushState({}, href, href);
	};

	registerRoute = (route: string, el: HTMLElement) => {
		this.state.routes[route] = el;
	};

	unregisterRoute = (route: string) => {
		delete this.state.routes[route];
	};

	render() {
		const { children } = this.props;
		return (
			<RouterContext.Provider
				value={{
					goToHref: this.goToHref,
					registerRoute: this.registerRoute,
					unregisterRoute: this.unregisterRoute
				}}
			>
				{children}
			</RouterContext.Provider>
		);
	}
}

// const getCurrentRoute = () => {
// 	return window.location.pathname;
// };

// const Router2: React.FC<Props> = props => {
// 	const [currentRoute, setCurrentRoute] = useState(getCurrentRoute());

// 	useEffect(() => {
// 		const onPushState = e => {
// 			e.preventDefault();
// 			console.log('pushstate', { e, 'window.location': window.location });
// 			this.setState(update(this.state));
// 		};
// 		const onPopState = e => {
// 			e.preventDefault();
// 			console.log('popstate', { e, 'window.location': window.location });
// 			this.setState(update(this.state));
// 		};

// 		window.addEventListener('pushstate', onPushState, false);
// 		window.addEventListener('popstate', onPopState, false);

// 		return () => {
// 			window.removeEventListener('pushstate', onPushState, false);
// 			window.removeEventListener('popstate', onPopState, false);
// 		};
// 	}, [currentRoute]);

// 	return (
// 		<RouterContext.Provider
// 			value={{
// 				currentRoute,
// 				setCurrentRoute,
// 				goToHref: this.goToHref,
// 				registerRoute: this.registerRoute,
// 				unregisterRoute: this.unregisterRoute
// 			}}
// 		>
// 			{props.children}
// 		</RouterContext.Provider>
// 	);
// };
