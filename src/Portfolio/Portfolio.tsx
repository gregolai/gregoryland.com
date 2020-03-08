import React, { createContext, Component, createRef, useContext, useState, useRef } from 'react';

import { Screens } from './Screens';
import useScrollBreakpoints from './useScrollBreakpoints';
import { Tabs } from './Tabs';
import { Box } from 'primitives';

interface NavigationProps {
	id: string;
	label: React.ReactChild;
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

const Portfolio = () => {
	const ref = useRef(null);
	const [state, setState] = useState({
		currentScreenId: '',
		screens: [],
		screensById: {}
	});

	const setCurrentScreen = (screenId: string) => {
		const screen = state.screensById[screenId];
		if (screen && screenId !== state.currentScreenId) {
			const DURATION = 300;
			// TODO: Fade out
			ref.current.setAttribute('style', `transition-duration:${DURATION}ms;opacity:0;`);

			setState(state => ({
				...state,
				currentScreenId: screenId
			}));
			setTimeout(() => {
				//document.scrollingElement.scrollTo(0, screen.offsetTop);

				ref.current.setAttribute('style', `transition-duration:${DURATION}ms;opacity:1;`);
				setTimeout(() => {
					// done
				}, DURATION);
			}, DURATION);
		}
	};

	const registerScreen = (screen: NavigationProps) => {
		setState(state => ({
			...state,
			screens: [...state.screens, screen],
			screensById: {
				...state.screensById,
				[screen.id]: screen
			}
		}));
	};

	return (
		<Context.Provider
			value={{
				registerScreen
			}}
		>
			<Box
				css={{
					overflow: 'hidden',
					opacity: '1',
					transitionTimingFunction: 'ease-in-out',
					transitionProperty: 'opacity'
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
				onChange={setCurrentScreen}
				options={state.screens.map(({ label, id }) => ({
					label,
					value: id
				}))}
				value={state.currentScreenId}
			/>
		</Context.Provider>
	);
};
Portfolio.useContext = () => useContext(Context);
export default Portfolio;
