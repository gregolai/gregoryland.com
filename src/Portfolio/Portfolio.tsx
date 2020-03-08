import React, { createContext, Component, createRef, useContext, useState, useRef, useEffect } from 'react';

import { Screens } from './Screens';
import useScrollBreakpoints from './useScrollBreakpoints';
import { Tabs } from './Tabs';
import { Box } from 'primitives';
import { PageRouter } from '../Router/router_3rd_party/NewRouter';

interface ScreenProps {
	el: HTMLElement;
	id: string;
	label: React.ReactChild;
}

const Context = createContext({
	registerScreen: (opts: ScreenProps) => {}
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

const TRANSITION_DURATION = 300;

const Portfolio = () => {
	const ref = useRef(null);
	const [state, setState] = useState({
		currentScreenId: '',
		screens: [] as ScreenProps[],
		screensById: {} as Mapped<ScreenProps>
	});

	const [transition, setTransition] = useState({
		state: 0,
		screen: undefined
	});

	const registerScreen = (screen: ScreenProps) => {
		console.log('registerScreen', screen);
		setState(state => ({
			...state,
			screens: [...state.screens, screen],
			screensById: {
				...state.screensById,
				[screen.id]: screen
			}
		}));
	};

	useEffect(() => {
		const { state, screen } = transition;

		let timeoutId;
		if (state === 1) {
			timeoutId = setTimeout(() => {
				document.scrollingElement.scrollTo(0, screen.el.offsetTop);

				setTransition({
					state: 2,
					screen
				});
			}, TRANSITION_DURATION);
		} else if (state === 2) {
			timeoutId = setTimeout(() => {
				setTransition({
					state: 0,
					screen: undefined
				});
			}, TRANSITION_DURATION);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [transition.state]);

	return (
		<PageRouter
			onTransition={(location, action) => {
				const screenId = location.pathname.substr(1);
				// if (screenId === state.currentScreenId) return false;

				// setState(state => ({
				// 	...state,
				// 	currentScreenId: screenId
				// }));
				console.log({ screenId, state, screen: state.screensById[screenId] });
				setTransition({
					state: 1,
					screen: state.screensById[screenId]
				});
			}}
			// onTransition={async (location, action) => {
			// 	return;
			// 	return new Promise(resolve => {
			// 		setTimeout(() => {
			// 			console.log({ transition });
			// 			const { screen } = transition;
			// 			document.scrollingElement.scrollTo(0, screen.el.offsetTop);

			// 			setTransition({
			// 				state: 2,
			// 				screen: transition.screen
			// 			});

			// 			setTimeout(resolve, TRANSITION_DURATION);
			// 		}, TRANSITION_DURATION);
			// 	});
			// }}
			// onAfterTransition={async (location, action) => {
			// 	return;
			// 	setTransition({
			// 		state: 0,
			// 		screen: undefined
			// 	});
			// }}
		>
			<Context.Provider
				value={{
					registerScreen
				}}
			>
				<Box
					css={{
						overflow: 'hidden',
						transitionTimingFunction: 'ease-in-out',
						transitionProperty: 'opacity',
						transitionDuration: `${TRANSITION_DURATION}ms`,

						opacity: transition.state === 1 ? '0' : '1'
					}}
					ref={ref}
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
				</Box>

				<Tabs
					css={{
						position: 'fixed',
						right: '50px',
						top: '50px'
					}}
					options={state.screens.map(({ label, id }) => ({
						label,
						value: id
					}))}
					value={state.currentScreenId}
				/>
			</Context.Provider>
		</PageRouter>
	);
};
Portfolio.useContext = () => useContext(Context);
export default Portfolio;
